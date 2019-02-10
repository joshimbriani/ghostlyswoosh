---
name: Shopping
title: Shopping
type: shopping
layout: page 
cover: shopping.jpg
icon: shopping.jpg
permalink: /shopping/
---

{% assign areaShopping = site.shopping | group_by: 'area' %}

<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            {% for area in areaShopping %}
                <h2 id="{{ area.name }}-ref">{{area.name}}</h2>
                <div class="container-fluid">
                    <div class="row">
                        {% for shopping in area.items %}
                            <div class="col-md-6">
                                <a href="{{ site.baseurl }}{{ shopping.url }}"><img src="{{ site.baseurl }}/images/shopping/icon/{{ shopping.icon }}" alt="{{shopping.name}}" class="img-fluid" />
                                </a>
                                <h4><a href="{{ site.baseurl }}{{ shopping.url }}">{{ shopping.name }}</a></h4>
                            </div>
                        {% endfor %}
                    </div>
                </div>
            {% endfor %}
        </div>
    </div>
</div>