//
//  KKFileManager.h
//  KKWebView
//
//  Created by Kuroky on 16/10/31.
//  Copyright © 2016年 kuroky. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface KKFileManager : NSObject

@property (nonatomic, copy, readonly) NSString *basePath;
@property (nonatomic, copy, readonly) NSString *htmlPath;

+ (KKFileManager *)manager;
- (BOOL)copyfileFromPath:(NSString *)path;

@end
