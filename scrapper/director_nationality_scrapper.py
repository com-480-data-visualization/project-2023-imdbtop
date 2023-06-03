import csv
import requests
import pandas as pd
from requests.adapters import HTTPAdapter, Retry
from time import sleep
import random
from bs4 import BeautifulSoup

def get_dirctors_url():
    url = "https://www.imdb.com"
    directors = []
    directors_url = []
    file_path = "../data/imdb250_merge_v1.0.csv"
    with open(file_path, 'r') as f:
        csv_reader = csv.reader(f)
        for count,row in enumerate(csv_reader):
            if count == 0:
                continue
            if len(row[15]) == 0 or len(row[16]) == 0:
                continue
            director = [row[15].split(', ')[0]]
            director_url = [ url + row[16]]
            directors.extend(director)
            directors_url.extend(director_url)
    return directors, directors_url
            
def get_stars_url():
    url = "https://www.imdb.com"
    stars_url = []
    stars = []
    file_path = "../data/imdb250_merge_v1.0.csv"
    with open(file_path, 'r') as f:
        csv_reader = csv.reader(f)
        for count,row in enumerate(csv_reader):
            if count == 0:
                continue
            if len(row[17]) == 0 or len(row[18]) == 0:
                continue
            star = [n.replace('\n', '') for n in row[17].split(', ')]
            star_url = [ url + id for id in row[18].split(',')]
            if len(star) != len(star_url):
                stars.extend(star)
                stars_url.extend(star_url[len(star_url)-len(star):])
                continue
            stars.extend(star)
            stars_url.extend(star_url)
    return stars, stars_url
             
if __name__ == "__main__":
    headers_list = [
    {
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; Android 10; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Mobile Safari/537.36'
    }, {
        'user-agent': 'Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; Android) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.109 Safari/537.36 CrKey/1.54.248666'
    }, {
        'user-agent': 'Mozilla/5.0 (X11; Linux aarch64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.188 Safari/537.36 CrKey/1.54.250320'
    }, {
        'user-agent': 'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+'
    }, {
        'user-agent': 'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.1.0; en-US) AppleWebKit/536.2+ (KHTML like Gecko) Version/7.2.1.0 Safari/536.2+'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; U; Android 4.1; en-us; GT-N7100 Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; U; Android 4.0; en-us; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; Android 7.0; SM-G950U Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G965U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.111 Mobile Safari/537.36'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; Android 8.1.0; SM-T837A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.80 Safari/537.36'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; U; en-us; KFAPWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.13 Safari/535.19 Silk-Accelerated=true'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; LGMS323 Build/KOT49I.MS32310c) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/102.0.0.0 Mobile Safari/537.36'
    }, {
        'user-agent': 'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 550) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/14.14263'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 10 Build/MOB31T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; Android 8.0.0; Nexus 5X Build/OPR4.170623.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; Android 7.1.1; Nexus 6 Build/N6F26U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; Android 8.0.0; Nexus 6P Build/OPP3.170518.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 7 Build/MOB30X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
    }, {
        'user-agent': 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 520)'
    }, {
        'user-agent': 'Mozilla/5.0 (MeeGo; NokiaN9) AppleWebKit/534.13 (KHTML, like Gecko) NokiaBrowser/8.5.0 Mobile Safari/534.13'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; Pixel 3 Build/PQ1A.181105.017.A1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.158 Mobile Safari/537.36'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; Android 11; Pixel 3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.181 Mobile Safari/537.36'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36'
    }, {
        'user-agent': 'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36'
    }, {
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1'
    }, {
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
    }, {
        'user-agent': 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1'
    }
]

    
    directors, directors_url = get_dirctors_url()
    directors_nationality = []
    stars, stars_url = get_stars_url()
    stars_nationality = []
    from tqdm import tqdm;
    
    for i, url in tqdm(enumerate(directors_url)):
        headers = random.choice(headers_list)
        response = requests.get(url, headers = headers)
        soup = BeautifulSoup(response.content, "html.parser")
        items = soup.select('a[href^="/search/name/?birth_place="]')
        if len(items) == 0:
            print('NA')
            directors_nationality.append('NA')
        for item in items:
            print(item.get_text().split(', ')[-1])
            directors_nationality.append(item.get_text().split(', ')[-1])
        response.close()
        
    for i, url in tqdm(enumerate(stars_url)):
        headers = random.choice(headers_list)
        response = requests.get(url, headers = headers)
        soup = BeautifulSoup(response.content, "html.parser")
        items = soup.select('a[href^="/search/name/?birth_place="]')
        if len(items) == 0:
            print('NA')
            stars_nationality.append('NA')
        for item in items:
            print(item.get_text().split(', ')[-1])
            stars_nationality.append(item.get_text().split(', ')[-1])
        response.close()
            
    # Create and open a CSV file in write mode
    with open("director_nationalities.csv", "w", newline="") as csvfile:
        # Create a CSV writer object
        writer = csv.writer(csvfile)
        # Write the header row
        writer.writerow(["director", "nationality"])
        # Write the movie names and image URLs as rows in the CSV file
        for director, nation in zip(directors, directors_nationality):
            writer.writerow([director, nation])
    
    with open("star_nationalities.csv", "w", newline="") as csvfile:
        # Create a CSV writer object
        writer = csv.writer(csvfile)
        # Write the header row
        writer.writerow(["star", "nationality"])
        # Write the movie names and image URLs as rows in the CSV file
        for star, nation in zip(stars, stars_nationality):
            writer.writerow([star, nation])