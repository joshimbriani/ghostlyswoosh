---
name: Rides
title: Rides
type: ride
layout: page 
cover: rides.jpg
icon: rides.jpg
permalink: /rides/
---

{% assign areaRides = site.rides | group_by: 'area' %}

<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            {% for area in areaRides %}
                <h2 id="{{ currentArea }}-ref">{{area.name}}</h2>
                <div class="container-fluid">
                    <div class="row">
                        {% for ride in area.items %}
                            <div class="col-md-6">
                                <a href="{{ site.baseurl }}{{ ride.url }}"><img src="{{ site.baseurl }}/images/rides/icon/{{ ride.icon }}" alt="{{ride.name}}" class="img-fluid" />
                                </a>
                                <h4><a href="{{ site.baseurl }}{{ ride.url }}">{{ ride.name }}</a></h4>
                            </div>
                        {% endfor %}
                    </div>
                </div>
            {% endfor %}
        </div>
    </div>
</div>