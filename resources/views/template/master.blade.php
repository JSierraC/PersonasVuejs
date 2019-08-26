<html>
<head>
    <title>Personas Vue</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
    <meta name="viewport" content="width = device-width, initial-scale = 1"/gi>
</head>
<body>
    <div id="app">
        @yield('content')
    </div>
    <script src="{{mix('js/app.js')}}"></script>
</body>
</html>