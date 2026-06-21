#!/usr/bin/env python3
from http.server import HTTPServer, SimpleHTTPRequestHandler
import os, sys

os.chdir(os.path.dirname(os.path.abspath(__file__)))

class H(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path in ('/', ''):
            self.path = '/index.html'
        return SimpleHTTPRequestHandler.do_GET(self)

port = int(os.environ.get('PORT', 80))
HTTPServer(('0.0.0.0', port), H).serve_forever()
