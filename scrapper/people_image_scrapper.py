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


def scrapper_task(filename, generate_filename, column_name):

    with open(filename, "r") as f:
        lines = f.readlines()[1:]

    with open(generate_filename, "w", newline="") as csvfile:
        # Create a CSV writer object
        writer = csv.writer(csvfile)
        # Write the header row
        writer.writerow(column_name)
        for line in lines:
            line = line.replace("\n", "")
            line_items = line.split(",")
            url = line_items[1]
            image_url = get_people_url(url)
            line_items.append(image_url)
            writer.writerow(line_items[:])


scrapper_task("director_url_nation.csv", "director_image.csv", ["director", "director_url", "nationality","image_url"])

