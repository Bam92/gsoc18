#! /usr/bin/python3.4

# -*-coding:utf-8 -*

import os, urllib.request, json

with urllib.request.urlopen("https://petscan.wmflabs.org/?format=json&psid=3316252") as url:
    os.chdir("/home/bam92/public_html/gsoc18")
    data = json.loads(url.read().decode())
    with open("test.json", 'w') as f:
        print(data, file=f)
