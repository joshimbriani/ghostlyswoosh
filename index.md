---
layout: homepage
---

<div class="container-fluid">
  <div class="row py-5">
    <div class="col-md-12">
      <h1>Rides</h1>
      <div class="container-fluid">
        <div class="row">
        <div class="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel"  data-interval="1000">
        <div class="MultiCarousel-inner">
          {% for ride in site.rides %}
            {% if ride.name != "Rides" %}
            <div class="item carouselitem">
              <img src="{{ site.baseurl }}/images/rides/icon/{{ ride.imagePrefix }}.jpg" alt="{{ride.name}}" class="img-fluid" />
              <h4><a href="{{ site.baseurl }}{{ ride.url }}">{{ ride.name }}</a></h4>
            </div>
            {% endif %}
          {% endfor %}
          </div>
          <button class="btn btn-primary leftLst"><</button>
          <button class="btn btn-primary rightLst">></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container-fluid">
  <div class="row py-5">
    <div class="col-md-12">
      <h1>Areas</h1>
      <div class="container-fluid">
        <div class="row">
        <div class="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel"  data-interval="1000">
        <div class="MultiCarousel-inner">
          {% for area in site.areas %}
            {% if area.name != "Areas Index" %}
            <div class="item carouselitem">
              <img src="{{ site.baseurl }}/images/areas/icon/{{ area.imagePrefix }}.jpg" alt="{{area.name}}" class="img-fluid" />
              <h4><a href="{{ site.baseurl }}{{ area.url }}">{{ area.name }}</a></h4>
            </div>
            {% endif %}
          {% endfor %}
          </div>
          <button class="btn btn-primary leftLst"><</button>
          <button class="btn btn-primary rightLst">></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container-fluid">
  <div class="row py-5">
    <div class="col-md-12">
      <h1>Recent Blog Posts</h1>
      <div class="container-fluid">
        <div class="row">
          {% for post in site.posts limit:1 %}
            <div class="col-md-6">
              <h2><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></h2>
              <p class="date"><time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: "%B %d, %Y" }}</time></p>
              <p class="">{% if post.description %}{{ post.description  | strip_html | strip_newlines | truncate: 120 }}{% else %}{{ post.content | strip_html | strip_newlines | truncate: 120 }}{% endif %}</p>
            </div>
          {% endfor %}
        </div>
      </div>
    </div>
  </div>
</div>