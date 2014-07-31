##uid3


**ui.slider([*selector*])**

A simple slider built in d3js. You call the function in javascript by writing **ui(selector).slider();** where your selector has the mandatory CSS attributes width and height.

**.color([*value*])**

Changes the color of the slider. The default color is white

EXAMPLE

![GitHub Logo](/images/slider.png)
Format: ![Alt Text](url)

```
<div id="slider01" style="width: 400px; height:120px"></div>
<div id="slider02" style="width: 600px; height:100px"></div>
<div id="slider03" style="width: 200px; height:80px"></div>
<div id="slider04" style="width: 800px; height:120px"></div>
<div id="slider05" style="width: 300px; height:100px"></div>
```

```
<script type="text/javascript">

ui("div#slider01").color("DeepPink").slider();
ui("div#slider02").color("BlueViolet").slider();
ui("div#slider03").color("DeepSkyBlue").slider();
ui("div#slider04").color("Plum").slider();
ui("div#slider05").color("Orange").slider();


</script>

```