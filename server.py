#! /usr/bin/python3.4
# -*-coding:utf-8 -*

"""This script download PetScan content in json format & write it on a file"""

# import (PEP 8 convention)
import os
import urllib.request
import json

with urllib.request.urlopen("https://petscan.wmflabs.org/?format=json&psid=3316252") as url:
    
    data = json.loads(url.read().decode())
    with open(os.path.expanduser("~/public_html/gsoc18/test.json")) as f:
        print(data, file=f)
