//
//  TestViewController.m
//  KKWebView
//
//  Created by Kuroky on 16/10/31.
//  Copyright © 2016年 kuroky. All rights reserved.
//

#import "TestViewController.h"
#import "KKFileManager.h"

@interface TestViewController () <WKUIDelegate, WKNavigationDelegate> {
    BOOL _loadLocalFile;
}

@end

@implementation TestViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    
    [self loadUrl];
    //[self loadLocalHtml];
    //_loadLocalFile = YES;
}

- (void)loadUrl {
    NSURL *url = [NSURL URLWithString:@"https://www.apple.com/cn/"];
    NSURLRequest *request = [NSURLRequest requestWithURL:url];
    [self.wkwebView loadRequest:request];
}

- (void)loadLocalHtml {
    NSString *path = [[KKFileManager manager] htmlPath];
    NSString *str = [NSString stringWithContentsOfFile:path encoding:NSUTF8StringEncoding error:nil];
    NSString *moduleStr = [str stringByReplacingOccurrencesOfString:@"@MAIN_JS@" withString:@"http://template.bestektv.com/Public/moban/7/main.js?v=1606231812"];
    
    NSURL *url = [NSURL fileURLWithPath:[KKFileManager manager].basePath];
    [self.wkwebView loadHTMLString:moduleStr baseURL:url];
}

#pragma mark - WKNavigationDelegate
- (void)webView:(WKWebView *)webView didStartProvisionalNavigation:(WKNavigation *)navigation {
    // 页面开始加载时调用
}

- (void)webView:(WKWebView *)webView didCommitNavigation:(WKNavigation *)navigation {
    // 当内容开始返回时调用
}

- (void)webView:(WKWebView *)webView didFinishNavigation:(WKNavigation *)navigation {
    // 页面加载完成之后调用
    if (_loadLocalFile) {
        [self onLoadCompelte];
    }
}

- (void)webView:(WKWebView *)webView didFailNavigation:(WKNavigation *)navigation withError:(NSError *)error {
    // 页面加载失败时调用
}

#pragma mark - 页面跳转代理
- (void)webView:(WKWebView *)webView didReceiveServerRedirectForProvisionalNavigation:(WKNavigation *)navigation {
    // 接收到服务器跳转请求之后调用
}

- (void)webView:(WKWebView *)webView decidePolicyForNavigationResponse:(WKNavigationResponse *)navigationResponse decisionHandler:(void (^)(WKNavigationResponsePolicy))decisionHandler {
    // 在收到响应后，决定是否跳转
    decisionHandler(WKNavigationResponsePolicyAllow);
}

- (void)webView:(WKWebView *)webView decidePolicyForNavigationAction:(WKNavigationAction *)navigationAction decisionHandler:(void (^)(WKNavigationActionPolicy))decisionHandler {
    // 在发送请求之前，决定是否跳转
    if (navigationAction.navigationType == WKNavigationTypeLinkActivated) {
        // 对于跨域，需要手动跳转
        //[[UIApplication sharedApplication] openURL:navigationAction.request.URL];
        // 不允许web内跳转
        decisionHandler(WKNavigationActionPolicyAllow);
    } else {
        decisionHandler(WKNavigationActionPolicyAllow);
    }
}

#pragma mark - 照片js
- (NSString *)photoJavaScript:(NSString *)pics {
    NSString *str = [NSString stringWithFormat:@"setPics(%@)", pics];
    return str;
}

#pragma mark 歌词&歌曲js
- (NSString *)musicJavaScript:(NSString *)musicUrl
                          lrc:(NSString *)lrcUrl {
    NSString *str = [NSString stringWithFormat:@"setMusic('%@','%@')",musicUrl,lrcUrl];
    return str;
}

#pragma mark - 开始/暂停 播放
- (void)musicPause:(BOOL)pause {
    NSString *str = @"";
    if (pause) {
        str = @"appPauseMusic()";
    }
    else {
        str = @"appPlayMusic()";
    }
    [self runJavaScript:str completion:^(NSError * _Nullable error) {
        
    }];
}

- (void)runJavaScript:(NSString *)js
           completion:(void(^)(NSError * _Nullable error))completion {
    [self.wkwebView evaluateJavaScript:js
                     completionHandler:^(id _Nullable response, NSError * _Nullable error) {
                         completion(error);
                     }];
}

- (NSString *)getJSHtmlPicsUrlWithPhotos:(NSArray *)photos {
    NSMutableArray *arr = [NSMutableArray array];
    [photos enumerateObjectsUsingBlock:^(UIImage *obj, NSUInteger idx, BOOL * _Nonnull stop) {
        NSData *imageData = UIImageJPEGRepresentation(obj, 0.7);
        NSString *imageSource = [NSString stringWithFormat:@"data:image/jpg;base64,%@",[imageData base64EncodedStringWithOptions:NSDataBase64EncodingEndLineWithLineFeed]];
        [arr addObject:imageSource];
    }];
    
    NSData *jsonData = [NSJSONSerialization dataWithJSONObject:arr
                                                       options:NSJSONWritingPrettyPrinted
                                                         error:nil];
    NSString *jsonStr = [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
    return jsonStr;
}

- (void)onLoadCompelte {
    UIImage *image = [UIImage imageNamed:@"4321"];
    [self runJavaScript:[self photoJavaScript:[self getJSHtmlPicsUrlWithPhotos:@[image]]]
             completion:^(NSError * _Nullable error) {
                 
             }];
    NSString *musicUrl = @"http://template.bestektv.com/music/ml_152.mp3";
    musicUrl = [musicUrl stringByAddingPercentEncodingWithAllowedCharacters:[NSCharacterSet URLFragmentAllowedCharacterSet]];
    NSString *lrcStr = @"http://template.bestektv.com/Public/lyric/music_152.lrc";
    [self runJavaScript:[self musicJavaScript:musicUrl lrc:lrcStr]
             completion:^(NSError * _Nullable error) {
                 
             }];
    [self runJavaScript:@"setStart()"
             completion:^(NSError * _Nullable error) {
                 
             }];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
