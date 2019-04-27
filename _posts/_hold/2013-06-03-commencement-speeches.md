---
layout: post
title:  Top 5 Commencement Speeches
date: 2013-06-03
categories: blog
speeches:
  - conan
tags:
  - speeches
  - videos
  - youtube
  - best
---

{% assign speeches = site.data.videos | where:"type", "commencement" %}

{% for speech in speeches %}
  <h2>{{ speech.name }}</h2>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/{{speech.youtube}}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <p>{{ speech.note }}</p>
{% endfor %}