#!/usr/bin/env python3
from http.server import HTTPServer, SimpleHTTPRequestHandler

class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/' or self.path == '':
            self.path = '/index.html'
        return super().do_GET()

HTTPServer(('0.0.0.0', 80), Handler).serve_forever()
