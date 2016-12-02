//
//  KKFileManager.m
//  KKWebView
//
//  Created by Kuroky on 16/10/31.
//  Copyright © 2016年 kuroky. All rights reserved.
//

#import "KKFileManager.h"
static NSString *const DefaultName          =   @"album";
@interface KKFileManager ()

@property (nonatomic, copy, readwrite) NSString *htmlPath;
@property (nonatomic, copy, readwrite) NSString *basePath;
@property (nonatomic, copy) NSString *folderPath;

@end

@implementation KKFileManager

+ (KKFileManager *)manager {
    static KKFileManager *manager;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        manager = [KKFileManager new];
    });
    return manager;
}

- (instancetype)init {
    self = [super init];
    if (self) {
        [self setUp];
    }
    return self;
}

- (void)setUp {
    //[self defaultPath];
}

#pragma mark - 创建路径
- (NSString *)folderPath {
    // iOS 9 本地Html 需放在tmp路径才能读取
    NSString *folderPath = [NSHomeDirectory() stringByAppendingString:@"/tmp/Html/"];
    if (![[NSFileManager defaultManager] fileExistsAtPath:folderPath]) {
        [[NSFileManager defaultManager] createDirectoryAtPath:folderPath withIntermediateDirectories:YES attributes:nil error:nil];
    }
    _folderPath = folderPath;
    return _folderPath;
}

- (NSString *)htmlPath {
    if (!_htmlPath) {
        NSString *path = [self.folderPath stringByAppendingString:DefaultName];
        _htmlPath = [path stringByAppendingString:@"/index.html"];
    }
    return _htmlPath;
}

- (NSString *)basePath {
    if (!_basePath) {
        _basePath = [self.folderPath stringByAppendingString:DefaultName];
    }
    return _basePath;
}

- (BOOL)copyfileFromPath:(NSString *)path {
    if (!path) {
        return NO;
    }
    
    NSError *error;
    [[NSFileManager defaultManager] copyItemAtPath:path toPath:self.basePath error:&error];
    if (error) {
        return NO;
    }
    else {
        return YES;
    }
}

@end
