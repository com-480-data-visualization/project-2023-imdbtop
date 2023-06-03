import csv
import requests
from bs4 import BeautifulSoup
import requests
from fake_useragent import UserAgent

user_agent = UserAgent()

def get_people_url(url):

    # step1: get the middle url link

    try:
        # Generate a random User-Agent header
        headers = {'User-Agent': user_agent.random}

        # Send a GET request with the random User-Agent header
        response = requests.get(url, headers=headers)

        html = response.text

        soup = BeautifulSoup(html, "html.parser")

        middle_link = soup.find("a", class_="ipc-lockup-overlay ipc-focusable")["href"]

        print(middle_link)

        middle_items = middle_link.split("/")

        middle_id = middle_items[4]
    except:
        return "N/A"

    # step2: use teh middle url link to get the image url

    middle_link = "https://www.imdb.com/" + middle_link

    # Generate a random User-Agent header
    headers = {'User-Agent': user_agent.random}

    # Send a GET request with the random User-Agent header
    response = requests.get(middle_link, headers=headers)

    html = response.text

    soup = BeautifulSoup(html, "html.parser")

    image_tag = soup.find('img', {'data-image-id': middle_id + '-curr'})
    if image_tag:
        image_url = image_tag['src']
        print(image_url)
    else:
        image_url = "N/A"

    return image_url

get_people_url("https://www.imdb.com/name/nm2371802/")

