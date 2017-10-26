//
//  KKWebViewController.m
//  KKWebView
//
//  Created by Kuroky on 16/10/27.
//  Copyright © 2016年 kuroky. All rights reserved.
//

#import "KKWebViewController.h"
#import <Masonry.h>

@interface KKWebViewController () <WKUIDelegate, WKNavigationDelegate>

@property (nonatomic, strong, readwrite) WKWebView *wkwebView;
@property (nonatomic, strong) UIBarButtonItem *backBarItem;
@property (nonatomic, strong) UIBarButtonItem *closeBarItem;
@property (nonatomic, strong) UIProgressView *progressView;

@end

@implementation KKWebViewController

#pragma mark - Get
- (WKWebView *)wkwebView {
    if (!_wkwebView) {
        _wkwebView = [self setupContentWebView];
    }
    return _wkwebView;
}

- (UIBarButtonItem *)backBarItem {
    if (!_backBarItem) {
        _backBarItem = [self setUpBackBarItem];
    }
    return _backBarItem;
}

- (UIBarButtonItem *)closeBarItem {
    if (!_closeBarItem) {
        _closeBarItem = [self setUpCloseBarItem];
    }
    return _closeBarItem;
}

- (UIProgressView *)progressView {
    if (!_progressView) {
        _progressView = [self setupProgressView];
    }
    return _progressView;
}


#pragma mark - Configuration
- (WKWebViewConfiguration *)setUpWebViewConfiguration {
    WKWebViewConfiguration *config = [[WKWebViewConfiguration alloc] init];
    // 设置偏好设置
    config.preferences = [[WKPreferences alloc] init];
    // 默认为0
    //config.preferences.minimumFontSize = 10;
    // 默认认为YES
    //config.preferences.javaScriptEnabled = YES;
    // 在iOS上默认为NO，表示不能自动通过窗口打开
    //config.preferences.javaScriptCanOpenWindowsAutomatically = NO;
    
    // web内容处理池
    //config.processPool = [[WKProcessPool alloc] init];
    if ([UIDevice currentDevice].systemVersion.floatValue >= 10.0) {
        config.mediaTypesRequiringUserActionForPlayback = WKAudiovisualMediaTypeNone;
    }
    else if ([UIDevice currentDevice].systemVersion.floatValue >= 9.0) {
        config.requiresUserActionForMediaPlayback = NO;
    }
    else {
        config.mediaPlaybackAllowsAirPlay = NO;
    }
    return config;
}

- (WKWebView *)setupContentWebView {
    WKWebViewConfiguration *config = [self setUpWebViewConfiguration];
    WKWebView *webView = [[WKWebView alloc] initWithFrame:CGRectZero configuration:config];
    webView.translatesAutoresizingMaskIntoConstraints = NO;
    webView.backgroundColor = [UIColor clearColor];
    webView.UIDelegate = self;
    webView.navigationDelegate = self;
    
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wundeclared-selector"
    [webView addObserver:self
              forKeyPath:NSStringFromSelector(@selector(loading))
                 options:NSKeyValueObservingOptionNew
                 context:nil];
#pragma clang diagnostic pop
    [webView addObserver:self
              forKeyPath:NSStringFromSelector(@selector(estimatedProgress))
                 options:NSKeyValueObservingOptionNew
                 context:nil];
    
    [webView addObserver:self
              forKeyPath:NSStringFromSelector(@selector(title))
                 options:NSKeyValueObservingOptionNew
                 context:nil];
    return webView;
}

- (UIBarButtonItem *)setUpBackBarItem {
    UIBarButtonItem *backBarItem = [[UIBarButtonItem alloc] initWithImage:[[UIImage imageNamed:@"nav_return"] imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal] style:UIBarButtonItemStylePlain target:self action:@selector(clickBackBar:)];
    return backBarItem;
}

- (UIBarButtonItem *)setUpCloseBarItem {
    UIBarButtonItem *closeBarItem = [[UIBarButtonItem alloc] initWithImage:[[UIImage imageNamed:@"pt_btnClose"] imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal] style:UIBarButtonItemStylePlain target:self action:@selector(clickPopBar:)];
    return closeBarItem;
}

- (UIProgressView *)setupProgressView {
    UIProgressView *progressView = [[UIProgressView alloc] initWithFrame:CGRectZero];
    progressView.translatesAutoresizingMaskIntoConstraints = NO;
    return progressView;
}

#pragma mark - ViewController Cycle
- (void)viewDidLoad {
    [super viewDidLoad];
    self.edgesForExtendedLayout = UIRectEdgeNone;
    self.view.backgroundColor = [UIColor whiteColor];
    
    [self addContentView];
}

- (void)addContentView {
    [self.view addSubview:self.wkwebView];
    [self.view addSubview:self.progressView];
    [self.wkwebView mas_makeConstraints:^(MASConstraintMaker *make) {
        make.left.equalTo(self.view.mas_left);
        make.bottom.equalTo(self.view.mas_bottom);
        make.right.equalTo(self.view.mas_right);
        make.top.equalTo(self.view.mas_top);
    }];
    
    [self.progressView mas_makeConstraints:^(MASConstraintMaker *make) {
        make.left.equalTo(self.view.mas_left);
        make.right.equalTo(self.view.mas_right);
        make.top.equalTo(self.view.mas_top);
        make.height.equalTo(@(2));
    }];
    
    [self.navigationItem setLeftBarButtonItems:@[self.backBarItem]];
}

#pragma mark - ProgressView
- (void)showProgressBar {
    if (self.progressView.alpha == 0.0) {
        self.progressView.alpha = 1.0;
    }
}

- (void)hideProgressbar {
    [UIView animateWithDuration:0.3
                     animations:^{
                         self.progressView.alpha = 0.0f;
                     }];
}

#pragma mark - KVO
- (void)observeValueForKeyPath:(NSString *)keyPath
                      ofObject:(id)object
                        change:(NSDictionary<NSString *,id> *)change
                       context:(void *)context {
    if (![object isKindOfClass:[WKWebView class]]) {
        return;
    }
    WKWebView *webView = (WKWebView *)object;
    if ([keyPath isEqualToString:NSStringFromSelector(@selector(estimatedProgress))]) {
        self.progressView.progress = webView.estimatedProgress;
    }
    else if ([keyPath isEqualToString:NSStringFromSelector(@selector(title))]) {
        self.navigationItem.title = webView.title;
    }
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wundeclared-selector"
    else if ([keyPath isEqualToString:NSStringFromSelector(@selector(loading))]) {
#pragma clang diagnostic pop
    }
    
    if (!webView.isLoading) {
        [self hideProgressbar];
        self.wkwebView.hidden = NO;
        [self updateCloseButton];
    }
    else {
        [self showProgressBar];
    }
}

- (void)updateCloseButton {
    if ([self.wkwebView canGoBack]) {
        [self.navigationItem setLeftBarButtonItems:@[self.backBarItem, self.closeBarItem]];
    }
    else {
        [self.navigationItem setLeftBarButtonItems:@[self.backBarItem]];
    }
}

#pragma marl - Button Action
- (void)clickBackBar:(id)sender {
    if ([self.wkwebView canGoBack]) {
        [self.wkwebView goBack];
    }
    else {
        [self dismissViewControllerAnimated:YES completion:nil];
    }
}

- (void)clickPopBar:(id)sender {
    [self dismissViewControllerAnimated:YES completion:nil];
}

- (void)removeContentView {
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wundeclared-selector"
    [self.wkwebView removeObserver:self
                        forKeyPath:NSStringFromSelector(@selector(loading))
                           context:nil];
#pragma clang diagnostic pop
    [self.wkwebView removeObserver:self
                        forKeyPath:NSStringFromSelector(@selector(estimatedProgress))
                           context:nil];
    [self.wkwebView removeObserver:self
                        forKeyPath:NSStringFromSelector(@selector(title))
                           context:nil];
    self.wkwebView.UIDelegate = nil;
    self.wkwebView.navigationDelegate = nil;
}

- (void)dealloc {
    [self removeContentView];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
