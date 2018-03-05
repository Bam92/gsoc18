# W2D2 Functional Spec

Abel L Mbula

Last Update: date here

## Overview
W2d2d (or WWDEE) which stands for *Wikimedia Worklist Dashboard for Editing Events* (some would prefer E2wd or EEWD as *Editing Events  Worklist Dashboard*) is a tool designed for wikimedia edit a thon organiser to help them collaborate and manage a worklist of articles. They must be able to:
* create a new worklist of articles by providing us the PSID (see PetScan tool) and the language (english, french) or the site (wikipedia, wikidata) of the query
* share worklists with other users using a link
* add manually articles inside a worklist
* assign an article to a user (or this one can clain by him/herself)
* view the status of articles in real time:
    * which articles are claimed by which other users
    * is the task completed or on going or not yet started

## Scenarios
### Scenario 1: Junias Mbele
Junias is a free/open source software dev. He is pationnate about free culture community. On his spare time he usually organize Wikipedia editing events with colleges and students. He manually prepares his worklist or rarelly uses PetScan tool. He is not unfortunately satisfied totally when it comes to track  users contributions or manage worklists. Because things are done manually, there's very often editing conflit because 2 or more users work on the same article at the same time. 

To track users contributions he creates a hashtag and uses hashtags tool. Unfortunately most of the time users forget to use hashtag; so some articles are not tracked at all. At his college's recommendation, Junias uses W2d2d tool now that facillitate him a set of things and let him save energy. He creates a worklist in a few while (thanks to PSID), shares the link to users; and *voila* no more conflict, no more need to spend time struggling on tools. He has evrything he need on his dashboard: statistics, real time contributions, he can add or delete articles on the worklist, assign tasks and more...

### Scenario 2: Merveille Kalenga
Merveille is studing medecine. She uses Wikipedia as a go-to source for resolving arguments with friends and even with professors as, e.g. the history of medecine. She sometimes finds lack of info on Wikipedia or reliable citation; so she participates in Wikipedia editing events to help improve the encyclopedy. One thing she hates in these events is that there's still editing conflict between other users and her. But that's for the past now as she is informed about a new tool that allows everyone to claim article, view which one is claimed by who, to unclaim, to mark article (task) as finished (done status), view in real time all activity (who claims, who edits, ...). 

## Non Goals
This version will not support the following features:
* Creating metrics or progress reports for the results of the workflist
* Drawing lists of articles from other sources, such as CSV files, [PagePiles] (https://tools.wmflabs.org/pagepile/howto.html), or .txt lists
* Creating an API or export function designed for exporting information about the list for use in other tools, such as a bot that creates reports on wiki or a metrics tool.


## Flowchart
see img folder: flow-chart1 and flow-chart2

## Screens
see img folder: 
