# Results

Draws a large number of images and applies a filter for each image.
Manually verify that scroll performance after images and filters
are created is valid.

## Google Chrome
*Version 48.0.2564.97 (64-bit)*

| Images | Ops/Sec | Mean  | GPU |
|-------|---------|-------|--------|
|20|20.93|0.047|YES|
|40|4.80|0.208|YES|
|80|1.09|0.91|YES|

## Safari
*Version 9.0.3 (11601.4.4)*

| Images | Ops/Sec | Mean  |
|-------|---------|-------|
|20|32.63|0.030|
|40|9.04|0.11|
|80|---|---|

## Firefox
*Version 44.0*

| Images | Ops/Sec | Mean  |
|-------|---------|-------|
|20|21.9|0.04|
|40|0.425|2.35|
|80|0.19|5.09|
