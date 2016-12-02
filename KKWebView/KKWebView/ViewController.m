//
//  ViewController.m
//  KKWebView
//
//  Created by Kuroky on 2016/12/2.
//  Copyright © 2016年 kuroky. All rights reserved.
//

#import "ViewController.h"
#import "TestViewController.h"
#import "KKFileManager.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    NSString *path = [[NSBundle mainBundle] pathForResource:@"ablum" ofType:nil];
    [[KKFileManager manager] copyfileFromPath:path];
    UIButton *btn = [UIButton buttonWithType:UIButtonTypeCustom];
    btn.frame = CGRectMake(100, 100, 40, 40);
    btn.backgroundColor = [UIColor redColor];
    [btn addTarget:self action:@selector(pushNext) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:btn];
}

- (void)pushNext {
    TestViewController *webVC = [TestViewController new];
    UINavigationController *navi = [[UINavigationController alloc] initWithRootViewController:webVC];
    [self presentViewController:navi animated:YES completion:nil];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
