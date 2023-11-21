# header

As a summary, this is a Vue3 app created using the create-vue cli to scaffold a simple Vue3
project using vue-router, typescript and other default options.

I used a bash script to scrape a local copy of all of the xkcd comic json files (and their
associated comic images) and then concatenated this into a giant array named data.json then made
the app work entirely client side. There was no particular reason for doing it entirely client
side instead of making queries to a back end for searches and such, I just happened to be in
a front-end kind of mood. Some benefits of this method of course include speed of operation
since none of the user actions require a http round trip, so latency can be decreased for most
actions, although of course we pay for this speed by increasing the initial cost to load the
website (the main datafile is roughly 750k gzipped) and putting some additional CPU load on the
user's computer, although given the size of the files and the expense of the actions involved
(fuzzy matching and so forth) this seems like an acceptable tradeoff. And of course, the images
themselves require HTTP requests to load and are, on the whole, considerably larger than any
kind of API request, so the actual perceived time savings for the end-user is probably fairly
minimal.

The "query" field uses the "fast-fuzzy" library to perform the actual searches on a combination
of the title + alt text fields from the JSON files. This produces reasonable results, although
they're probably more useable as auto-complete style suggestions rather than actual search
results. Still, if you type in a word you usually get the comics with that word in the title
and they're ordered fairly sanely.

The biggest upgrade would probably be design work, aside from fonts and colors and so forth,
there's a major issue with attempting to display multiple comics on a single page since they
vary in size from single panel comics to some that are literally dozens of pages long, fitting
these into a usable "search results" page is rather tricky. Aside from that, I didn't bother with
pagination for any of the results so you can't just scroll through the comics in order. On the
other hand, I did dockerize it and host it on a kubernetes cluster. Adding an autocomplete to the
query field would probably be nice, or just go ahead and make the whole filter system completely
dynamic and update the results as soon as you click/type instead of requiring you to click the
"filter" button, but this would require a bit more user interface design and I ran out of time.

Basic stuff about the repo:

The create-vue cli adds several useful scripts including 'npm run dev' for a fancy local dev
server and 'npm run build' to produce a "compiled" version of the site.

I didn't add the images to the git repo since they add up to roughly 150megs and I didn't think
any of us really needed to transfer those files to and from github.

The xkcd-server.yaml file is how I'm running the image on my local kubernetes cluster. It
works great... if you happen to have my exact set up already. I'm hosting the docker image at
registry.home.rmz.gs/peaches-xkcd which should be publically available, although it might be
password protected from outside my network. I've honestly forgotten and I don't have a good way
to test it. If you really want the docker image I'm using and you can't pull it, I can arrange
a user/password.
