#!/usr/bin/bash

for i in *.json;
do echo '{"type":"forge:disabled"}' > $i

done
