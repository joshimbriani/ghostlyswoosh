---
layout: homepage
---

<div class="container-fluid">
  <div id="wait_time_container" class="waitTime"></div>
</div>
<div class="container-fluid">
  <div class="row py-5">
    <div class="col-md-12">
      <h1>Recent Site Updates</h1>
      <div class="container-fluid">
        <div class="row">
          {% for post in site.posts limit:1 %}
            <div class="col">
              <h1><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></h1>
              <p class="date"><time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: "%B %d, %Y" }}</time></p>
              <p class="">{% if post.description %}{{ post.description  | strip_html | strip_newlines | truncate: 120 }}{% else %}{{ post.content | strip_html | strip_newlines | truncate: 120 }}{% endif %}</p>
            </div>
          {% endfor %}
        </div>
      </div>
    </div>
  </div>
</div>