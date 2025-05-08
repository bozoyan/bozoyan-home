/**
 * 缪斯个人主页 Node.js简易服务器
 * 用于本地开发和测试
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// 支持的MIME类型
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'font/otf',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav'
};

// 创建服务器
const server = http.createServer((req, res) => {
    // 解析URL
    const parsedUrl = url.parse(req.url);
    let pathname = parsedUrl.pathname;
    
    // 如果请求的是根目录，返回index.html
    if (pathname === '/') {
        pathname = '/index.html';
    }
    
    // 构建文件路径
    const filePath = path.join(__dirname, pathname);
    
    // 获取文件扩展名
    const extname = path.extname(filePath).toLowerCase();
    
    // 确定内容类型
    const contentType = mimeTypes[extname] || 'application/octet-stream';
    
    // 读取文件
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // 如果文件不存在，返回404页面
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, data) => {
                    if (err) {
                        // 如果404页面也不存在，返回简单的404消息
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end('<h1>404 Not Found</h1><p>The page you requested was not found.</p>');
                    } else {
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end(data);
                    }
                });
            } else {
                // 服务器错误
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // 成功响应
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

// 监听端口
const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`个人主页服务器已启动!`);
    console.log(`本地访问: http://localhost:${PORT}`);
    console.log(`局域网访问: http://192.168.1.37:${PORT}`);
    console.log(`按 Ctrl+C 停止服务器`);
}); 