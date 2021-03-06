// ==UserScript==
// @name         splunk> debug, bump & restart helper
// @author       Barokai | www.loigistal.at
// @copyright    2016+, Barokai
// @namespace    http://betpc306/userscripts/
// @icon         data:image/x-icon;base64,AAABAAIAICAAAAEAIAAoEAAAJgAAABAQAAABACAAKAQAAE4QAAAoAAAAIAAAAEAAAAABACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALpFX/y6RV/8vklj/LpFX/y+TWf8uklj/L5NZ/y+TWP8vlFn/MJRa/y+VWf8wlVr/L5VZ/zCWW/8wllr/MJZa/zCXW/8wl1v/MZhc/zCXW/8xmVz/MJhc/zCYXP8wmFz/MZlc/zGaXf8wmVz/MZlc/zGaXf8xm13/MZpd/zGaXf8ukVf/L5JY/y6SWP8vk1n/L5NZ/y+UWf8wlFn/MJVa/zCVWv8wllr/MJZb/zCWWv8wl1v/MJdb/zCYXP8wmFv/MJdb/zGZXP8wmFv/MZlc/zGaXf8xmVz/MZpd/zGbXf8xml3/MZpd/zKbXv8xm13/Mpxe/zGbXf8ym17/Mpxe/y6SWP8vlFn/L5NZ/zCUWv8vlFn/L5VZ/y+VWv8vlVr/MJZa/zGXW/8wl1v/MJdb/zCYXP8wmFz/MZlc/zCYXP8wmVz/MZpd/zGaXf8xm13/MZpd/zGbXf8xm13/MZtd/zGbXv8ynF//Mpxe/zGcXv8ynF7/Mpxe/zKdX/8ynV7/L5RZ/y+UWf8vlVr/L5Va/zCWW/8wllr/MJdb/zCXW/8wl1v/MJdb/zGZXP8xmVz/MZlc/zGaXf8xmVz/Mptd/zGaXf8xm13/MZtd/zGbXf8ynF//Mpxe/zKcXv8ynV//Mp1e/zKdXv8ynV//Mp5f/zKeX/8ynl//Mp1f/zOeYP8wlVr/L5Za/zCWW/8wllr/MJdb/zCXW/8wl1v/MZhc/zGZXP8wmVz/MZld/zGaXf8xml3/MZpd/zGbXf8xm17/Mpxe/zGcXv8ynF7/MZxe/zKdX/8xnF7/Mp1f/zKeX/8znmD/Mp1f/zOfYP8ynmD/Mp5f/zKfYP8yn2D/Mp9g/zCWWv8wl1v/MJdb/zCYW/8wl1v/MZhc/zGaXf8xmVz/MZpd/zGaXf8xml3/Mpxe/zKbXv8xnF7/Mpxe/zGcXv8ynV7/Mp1f/zKeX/8ynl//Mp5f/zKfYP8zn2D/Mp5g/zOgYP8zn2D/Mp9g/zOgYf8zoGD/M6Bh/zOhYf8yoGD/MJdb/zCYW/8wmFz/MJhc/zGaXf8xml3/MZpd/zGaXf8xm13/Mpte/zGcXv8xnF7/Mp1f/zKcXv8ynl//Mp5f/zKdX/8yn2D/Mp5f/zKfYP8zoGD/M6Bh/zKfYP8zoGH/M6Bg/zOhYf8zoGD/M6Fh/zOiYv8zoWH/M6Fh/zOhYf8wmFz/MZpd/zGaXf8xml3/MZpd/zGbXf8ym17/Mpxe/zGcXv8ynV//Mp1f/yiATf8vlVn/M59g/zKeX/8zn2D/M59g/zOgYP8zoWH/M6Fh/zOgYf8zoWH/M6Fh/zSiYv8zoWH/M6Ji/zSiYv8zomL/M6Ji/zSiYv8zomL/NKJi/zCZXP8xml3/MZpd/zGbXf8ynF7/Mpxe/zKdXv8ynV//Mp5f/zKeX//K5tb/V5Vw/yV3R/8pgk//MJhc/zOgYf8yoGD/M6Fh/zOhYf8zoWH/M6Ji/zSiYv8zomL/M6Ji/zOjYv80o2P/M6Ni/zSjYv8zomL/NKNi/zSkY/80pGP/Mpte/zGbXv8ynF7/MZxe/zKdXv8ynV//Mp5f/zKeX/8ynl//M6Bg////////////wNjK/1GSbP8meEj/KoVQ/zGbXf80omL/NKJi/zOjYv80o2L/NKNj/zSkY/80pGP/NKNj/zSkY/80pGP/NKVk/zWlZf80pWT/NaVk/zSlZP8xnF7/Mpxf/zKcXv8ynl//M55g/zKeX/8zn2D/Mp9g/zOgYf8zoGH/9Pr2/////////////////7rUxf9MkWn/JnpJ/yuIU/8ynV//NKRj/zSkY/80pWT/NaVk/zSiZP41pWX/NaZl/zWjZf41pGX+NaZm/zWkZf41pmb/NaZm/zKdX/8ynV//Mp5f/zOfYP8yn2D/M6Bg/zOhYf8zoGH/M6Fh/zOhYf9DqW3/n9O1//b7+P////////////7+/v+00cD/R4xl/id8S/8si1b/M51h/jWmZv82pmb/NqVn/jWlZ/42p2f/Nqdn/zalZ/42p2f/NqVn/jWkZ/41pWf+Mp5f/zOfYP8zoGH/M59g/zOgYf8zoGH/M6Fh/zSiYv8zomH/NKNj/zOjYv80o2L/RKtv/6PWuf/3+/n////////////8/fz/rs68/0OLZP4ofk3/LYxY/jShZf42pmn+NqZo/jaoaf82pmj+NqZo/jenav43p2r+N6dq/jeoaf8yn2D/M6Bh/zOgYf8zoWH/M6Fh/zSiYv8zomL/NKNj/zSjY/80pGP/NKRj/zWlZP80pWT/NqZm/0iudP+l17v+9/r4/v//////////+Pr5/qbItf5AimL+KX9Q/jenav43p2r+N6hr/jeoa/44qGz+N6hr/jipbP44qGz+N6hr/jOgYf8zoWH/M6Fh/zSjYv80omL/M6Ni/zSjYv80pGP/NKJk/jSlZP81pmb/NaZl/zWlZ/42p2f/NqZo/jamaP5MsHr+qtm//vj6+f7///////////P39f4pf1D+OKlt/jesav04qW3+OKpt/jipbf44rGr9OKlt/jipbf44qWz+NKJi/zSiYv8zomH/NKNi/zSkY/80pGP/NaVk/zWmZv81pmb/Nqdn/zWlZ/42pmn+Nqhp/zanaf43p2r+OKhs/jipbP42o2n+YK2E/fT49v7/////+/z7/iyCVP45q2/+OK1s/Tmqbv44rWz9Oapu/jmqbv44rWz9Oapu/jmrbv4zomL/NKNi/zSkY/80o2P/NaVl/zWkZf41pmX/NaVn/jWlZ/43qGn/Nqdp/jenav43qGv+OKhs/jisav02p2f9R55w/6fLuP74+vn+///////////s9O/+OKtr/Tmubf05rm39Oaxw/jmubf05rm79Oa5t/TmscP45rm39Oa5t/TSkY/80pGP/NKJk/jWkZf41pmb/NqVn/janZ/83qGn/N6dq/jenav44qGv+N6hr/jiqbf42pGr+R51w/qbKtv73+vj+///////////x9/T+m9O3/UKzdv06sXH9O7Fx/TqwcP06sHD9OrFx/TqwcP06rXH+Oq9v/Tqvb/06r2/9NKJk/jWlZP81pmb/Nqdn/zWlZ/42pmj+N6dq/janaf43qGv+OKpt/jipbf42qGn9RZ5v/6TJtf73+vj+///////////1+ff+oda6/ke2e/05snT8OLJ0/Duxcv04snT8O7Fy/Tuycv07sXL9OLJ0/DqwcP06sHD9O7Fx/Tqvb/01pmb/NqVn/jWlZ/42pmj+N6pq/zenav44qGz+OKlt/jisav04rWz9TbR+/qXKt//3+fj+///////////4+vn+rNrC/ky5g/07sXL9O7Jz/TyzdP07snP9PLN0/Tyzc/05s3b8ObN2/Dyzc/08s3T9O7Fy/Tuycv06sHD9O7Fx/TanZ/82pmj+N6hp/zanaf44qGv+N6hr/jisav04rWz9Oqxw/jmubf32+vj+///////////7/Pv+td3J/lO9iP08s3P9ObN2/Dy0df06tHf8PLR1/Tq0d/w6tHf8OrR4/Dy0df05tHf8OrV4/Dmzdvw5s3b8O7Jz/Tuxcv06sHD9NqZo/jepav83p2r+N6hr/jipbf45qm7+Oatu/jmubf06sG/9Oq9v/f//////////v+HQ/l3Ai/w8s3T9OrR3/Dq0d/w9tXb9O7V5/Du2efw7tnr8O7d6/Du3e/w6tXn8O7Z5/Du2efw6tXn8PLR1/Ty0df05s3b8O7Jy/TiydPw2p2n+N6hr/jisav04rGr9Oapu/jqscP45rm39Oq9v/TqwcP07snL9yejY/mbDkfw8tHX9OrR3/Du1efw7tnn8O7Z6/Du3evw7t3z8O7V5+zy4fPw8uHz8O7d7/Du3evw7tnr8O7d7/Dq1efw6tHf8PLR1/Tmzdvw7snP9O7Jy/Teoa/44qW3+Oatv/jmqbv45rm39Oa9v/Tqwcf07sXH9OLJ0/Duyc/08s3T9OrR4/Du2efw7tnn8O7Z6/Dy4fPw8t3z8PLl9/D25fvw8uX38PLh9/Dy2e/s8uX38PLh8/Du1efs7tnr8PbV2/Tq1efw6tXj8PLNz/Tmzdvw7snL9OKxq/TitbP04rWz9Oa5t/Tqvb/07sXH9OrBw/Tuxcv05s3b8PLR1/Tq0d/w7tnn8O7Z6/Du3fPw8uHz8PLl9/Dy3fPtAt3z7QLiA+zy3fPtAuID7Pbp//Dy2e/s8uHz8O7d8/Du3e/w6tXn8O7Z5/Dm0d/w5s3b8O7Jy/Tuxcv05qm7+Oapu/jmscP45r2/9OrBw/Tuycv07sXL9PLNz/Tq0d/w7tnn8O7Z5/Du2evw8uHz8PLl9/Dy5ffw8t3z7Prt//EG5gftBuoP7QLiB+0C3fPs9un/8PLl9/Dy4fPw7tXn7O7d6/Du2efw6tHf8PLN0/Tmzdvw7sXL9OrBw/TitbP06rHD+Oa9v/TqwcP07sXH9OLJ0/Dyzc/05tHf8PbV2/Tq1efw7tnr8O7d8/Dy5ffw8tnv7Pbp//EG5gftBuYL7PryA/EG5gvtAuYH7Pbp//Dy2e/s8uHz8O7V5+zy3e/w6tXn8OrR3/Dq0d/w8s3P9OLJ0/Duxcf06sG/9Oa5u/Tmvbv06r2/9O7Fx/TiydPw7snP9PLR1/Tq0ePw6tXn8O7d7/Dy4fPw8uHz8Pbl9/EC4gPs8t3z7QLiB+0C5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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=
// @icon64       data:image/x-icon;base64,AAABAAIAICAAAAEAIAAoEAAAJgAAABAQAAABACAAKAQAAE4QAAAoAAAAIAAAAEAAAAABACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALpFX/y6RV/8vklj/LpFX/y+TWf8uklj/L5NZ/y+TWP8vlFn/MJRa/y+VWf8wlVr/L5VZ/zCWW/8wllr/MJZa/zCXW/8wl1v/MZhc/zCXW/8xmVz/MJhc/zCYXP8wmFz/MZlc/zGaXf8wmVz/MZlc/zGaXf8xm13/MZpd/zGaXf8ukVf/L5JY/y6SWP8vk1n/L5NZ/y+UWf8wlFn/MJVa/zCVWv8wllr/MJZb/zCWWv8wl1v/MJdb/zCYXP8wmFv/MJdb/zGZXP8wmFv/MZlc/zGaXf8xmVz/MZpd/zGbXf8xml3/MZpd/zKbXv8xm13/Mpxe/zGbXf8ym17/Mpxe/y6SWP8vlFn/L5NZ/zCUWv8vlFn/L5VZ/y+VWv8vlVr/MJZa/zGXW/8wl1v/MJdb/zCYXP8wmFz/MZlc/zCYXP8wmVz/MZpd/zGaXf8xm13/MZpd/zGbXf8xm13/MZtd/zGbXv8ynF//Mpxe/zGcXv8ynF7/Mpxe/zKdX/8ynV7/L5RZ/y+UWf8vlVr/L5Va/zCWW/8wllr/MJdb/zCXW/8wl1v/MJdb/zGZXP8xmVz/MZlc/zGaXf8xmVz/Mptd/zGaXf8xm13/MZtd/zGbXf8ynF//Mpxe/zKcXv8ynV//Mp1e/zKdXv8ynV//Mp5f/zKeX/8ynl//Mp1f/zOeYP8wlVr/L5Za/zCWW/8wllr/MJdb/zCXW/8wl1v/MZhc/zGZXP8wmVz/MZld/zGaXf8xml3/MZpd/zGbXf8xm17/Mpxe/zGcXv8ynF7/MZxe/zKdX/8xnF7/Mp1f/zKeX/8znmD/Mp1f/zOfYP8ynmD/Mp5f/zKfYP8yn2D/Mp9g/zCWWv8wl1v/MJdb/zCYW/8wl1v/MZhc/zGaXf8xmVz/MZpd/zGaXf8xml3/Mpxe/zKbXv8xnF7/Mpxe/zGcXv8ynV7/Mp1f/zKeX/8ynl//Mp5f/zKfYP8zn2D/Mp5g/zOgYP8zn2D/Mp9g/zOgYf8zoGD/M6Bh/zOhYf8yoGD/MJdb/zCYW/8wmFz/MJhc/zGaXf8xml3/MZpd/zGaXf8xm13/Mpte/zGcXv8xnF7/Mp1f/zKcXv8ynl//Mp5f/zKdX/8yn2D/Mp5f/zKfYP8zoGD/M6Bh/zKfYP8zoGH/M6Bg/zOhYf8zoGD/M6Fh/zOiYv8zoWH/M6Fh/zOhYf8wmFz/MZpd/zGaXf8xml3/MZpd/zGbXf8ym17/Mpxe/zGcXv8ynV//Mp1f/yiATf8vlVn/M59g/zKeX/8zn2D/M59g/zOgYP8zoWH/M6Fh/zOgYf8zoWH/M6Fh/zSiYv8zoWH/M6Ji/zSiYv8zomL/M6Ji/zSiYv8zomL/NKJi/zCZXP8xml3/MZpd/zGbXf8ynF7/Mpxe/zKdXv8ynV//Mp5f/zKeX//K5tb/V5Vw/yV3R/8pgk//MJhc/zOgYf8yoGD/M6Fh/zOhYf8zoWH/M6Ji/zSiYv8zomL/M6Ji/zOjYv80o2P/M6Ni/zSjYv8zomL/NKNi/zSkY/80pGP/Mpte/zGbXv8ynF7/MZxe/zKdXv8ynV//Mp5f/zKeX/8ynl//M6Bg////////////wNjK/1GSbP8meEj/KoVQ/zGbXf80omL/NKJi/zOjYv80o2L/NKNj/zSkY/80pGP/NKNj/zSkY/80pGP/NKVk/zWlZf80pWT/NaVk/zSlZP8xnF7/Mpxf/zKcXv8ynl//M55g/zKeX/8zn2D/Mp9g/zOgYf8zoGH/9Pr2/////////////////7rUxf9MkWn/JnpJ/yuIU/8ynV//NKRj/zSkY/80pWT/NaVk/zSiZP41pWX/NaZl/zWjZf41pGX+NaZm/zWkZf41pmb/NaZm/zKdX/8ynV//Mp5f/zOfYP8yn2D/M6Bg/zOhYf8zoGH/M6Fh/zOhYf9DqW3/n9O1//b7+P////////////7+/v+00cD/R4xl/id8S/8si1b/M51h/jWmZv82pmb/NqVn/jWlZ/42p2f/Nqdn/zalZ/42p2f/NqVn/jWkZ/41pWf+Mp5f/zOfYP8zoGH/M59g/zOgYf8zoGH/M6Fh/zSiYv8zomH/NKNj/zOjYv80o2L/RKtv/6PWuf/3+/n////////////8/fz/rs68/0OLZP4ofk3/LYxY/jShZf42pmn+NqZo/jaoaf82pmj+NqZo/jenav43p2r+N6dq/jeoaf8yn2D/M6Bh/zOgYf8zoWH/M6Fh/zSiYv8zomL/NKNj/zSjY/80pGP/NKRj/zWlZP80pWT/NqZm/0iudP+l17v+9/r4/v//////////+Pr5/qbItf5AimL+KX9Q/jenav43p2r+N6hr/jeoa/44qGz+N6hr/jipbP44qGz+N6hr/jOgYf8zoWH/M6Fh/zSjYv80omL/M6Ni/zSjYv80pGP/NKJk/jSlZP81pmb/NaZl/zWlZ/42p2f/NqZo/jamaP5MsHr+qtm//vj6+f7///////////P39f4pf1D+OKlt/jesav04qW3+OKpt/jipbf44rGr9OKlt/jipbf44qWz+NKJi/zSiYv8zomH/NKNi/zSkY/80pGP/NaVk/zWmZv81pmb/Nqdn/zWlZ/42pmn+Nqhp/zanaf43p2r+OKhs/jipbP42o2n+YK2E/fT49v7/////+/z7/iyCVP45q2/+OK1s/Tmqbv44rWz9Oapu/jmqbv44rWz9Oapu/jmrbv4zomL/NKNi/zSkY/80o2P/NaVl/zWkZf41pmX/NaVn/jWlZ/43qGn/Nqdp/jenav43qGv+OKhs/jisav02p2f9R55w/6fLuP74+vn+///////////s9O/+OKtr/Tmubf05rm39Oaxw/jmubf05rm79Oa5t/TmscP45rm39Oa5t/TSkY/80pGP/NKJk/jWkZf41pmb/NqVn/janZ/83qGn/N6dq/jenav44qGv+N6hr/jiqbf42pGr+R51w/qbKtv73+vj+///////////x9/T+m9O3/UKzdv06sXH9O7Fx/TqwcP06sHD9OrFx/TqwcP06rXH+Oq9v/Tqvb/06r2/9NKJk/jWlZP81pmb/Nqdn/zWlZ/42pmj+N6dq/janaf43qGv+OKpt/jipbf42qGn9RZ5v/6TJtf73+vj+///////////1+ff+oda6/ke2e/05snT8OLJ0/Duxcv04snT8O7Fy/Tuycv07sXL9OLJ0/DqwcP06sHD9O7Fx/Tqvb/01pmb/NqVn/jWlZ/42pmj+N6pq/zenav44qGz+OKlt/jisav04rWz9TbR+/qXKt//3+fj+///////////4+vn+rNrC/ky5g/07sXL9O7Jz/TyzdP07snP9PLN0/Tyzc/05s3b8ObN2/Dyzc/08s3T9O7Fy/Tuycv06sHD9O7Fx/TanZ/82pmj+N6hp/zanaf44qGv+N6hr/jisav04rWz9Oqxw/jmubf32+vj+///////////7/Pv+td3J/lO9iP08s3P9ObN2/Dy0df06tHf8PLR1/Tq0d/w6tHf8OrR4/Dy0df05tHf8OrV4/Dmzdvw5s3b8O7Jz/Tuxcv06sHD9NqZo/jepav83p2r+N6hr/jipbf45qm7+Oatu/jmubf06sG/9Oq9v/f//////////v+HQ/l3Ai/w8s3T9OrR3/Dq0d/w9tXb9O7V5/Du2efw7tnr8O7d6/Du3e/w6tXn8O7Z5/Du2efw6tXn8PLR1/Ty0df05s3b8O7Jy/TiydPw2p2n+N6hr/jisav04rGr9Oapu/jqscP45rm39Oq9v/TqwcP07snL9yejY/mbDkfw8tHX9OrR3/Du1efw7tnn8O7Z6/Du3evw7t3z8O7V5+zy4fPw8uHz8O7d7/Du3evw7tnr8O7d7/Dq1efw6tHf8PLR1/Tmzdvw7snP9O7Jy/Teoa/44qW3+Oatv/jmqbv45rm39Oa9v/Tqwcf07sXH9OLJ0/Duyc/08s3T9OrR4/Du2efw7tnn8O7Z6/Dy4fPw8t3z8PLl9/D25fvw8uX38PLh9/Dy2e/s8uX38PLh8/Du1efs7tnr8PbV2/Tq1efw6tXj8PLNz/Tmzdvw7snL9OKxq/TitbP04rWz9Oa5t/Tqvb/07sXH9OrBw/Tuxcv05s3b8PLR1/Tq0d/w7tnn8O7Z6/Du3fPw8uHz8PLl9/Dy3fPtAt3z7QLiA+zy3fPtAuID7Pbp//Dy2e/s8uHz8O7d8/Du3e/w6tXn8O7Z5/Dm0d/w5s3b8O7Jy/Tuxcv05qm7+Oapu/jmscP45r2/9OrBw/Tuycv07sXL9PLNz/Tq0d/w7tnn8O7Z5/Du2evw8uHz8PLl9/Dy5ffw8t3z7Prt//EG5gftBuoP7QLiB+0C3fPs9un/8PLl9/Dy4fPw7tXn7O7d6/Du2efw6tHf8PLN0/Tmzdvw7sXL9OrBw/TitbP06rHD+Oa9v/TqwcP07sXH9OLJ0/Dyzc/05tHf8PbV2/Tq1efw7tnr8O7d8/Dy5ffw8tnv7Pbp//EG5gftBuYL7PryA/EG5gvtAuYH7Pbp//Dy2e/s8uHz8O7V5+zy3e/w6tXn8OrR3/Dq0d/w8s3P9OLJ0/Duxcf06sG/9Oa5u/Tmvbv06r2/9O7Fx/TiydPw7snP9PLR1/Tq0ePw6tXn8O7d7/Dy4fPw8uHz8Pbl9/EC4gPs8t3z7QLiB+0C5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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=
// @version      0.6
// @namespace    http://www.loigistal.at/userscripts/
// @homepage     https://github.com/Barokai/splunk-debur/
// @license      https://github.com/Barokai/splunk-debur/blob/master/LICENSE
// @updateURL    https://github.com/Barokai/splunk-debur/raw/master/splunk-debur.user.js
// @description  Adds shortcuts to splunk for: bump version, restart, debug/refesh and redirects you back after chosen action has completed.
// @match        http://localhost:8000/*/debug/refresh
// @match        http://localhost:8000/*/_bump
// @match        http://localhost:8000/*/*
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

/* jshint -W097 */
'use strict';

var baseLang = "en-GB";
var baseUrl = "http://localhost:8000/" + baseLang + "/";
var refreshUrl = baseUrl + "debug/refresh";
var bumpUrl = baseUrl + "_bump";
var restartUrl = baseUrl + "manager/search/control?auto_restart=1";
var divWait = document.createElement ('div');
divWait.setAttribute ('id', 'WaitContainer');
divWait.innerHTML = 'Wait... You will be redirected...';

//--- Style our newly added elements using CSS.
GM_addStyle ( multilineStr ( function () {/*!
  #ButtonContainer, #HoverContainer {
    position:   absolute;
    top:        0;
    left:       274px;
    opacity:    0.9;
    z-index:    222;
    margin-top: 4px;
    font-size:  12px;
    background: #222222;
    color:      rgb(187, 187, 187);
    font-family:Roboto, Droid, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding-left: 3px;
    padding-right: 3px;
  }
  #WaitContainer{
    top: 50%;
    left: 50%;
    width:300px;
    height:50px;
    margin-top: -25px;
    margin-left: -100px;
    border: 2px solid red;
    position:fixed;
    background: #222222;
    color:      rgb(187, 187, 187);
    font-size:  18px;
    font-family:Roboto, Droid, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    text-align: center;
    vertical-align: middle;
    line-height: 50px;
  }
  .customButton {
    cursor:     pointer;
    background: #222222;
    color:      rgb(187, 187, 187);
    border:     0;
  }
 .customButton:hover {
    color: #fff;
    background: #555;
  }
*/} ) );

function refreshAction (e) {
  window.location = refreshUrl;
}
function bumpAction (e) {
  window.location = bumpUrl;
}
function restartAction (e){
  window.location = restartUrl;
}
function multilineStr (dummyFunc) {
  var str = dummyFunc.toString ();
  str = str.replace (/^[^\/]+\/\*!?/, '') // Strip function ()  /*!
  .replace (/\s*\*\/\s*\}\s*$/, '')   // Strip */
  .replace (/\/\/.+$/gm, '') // Double-slash comments wreck CSS. Strip them.
  ;
  return str;
}

function toggle(obj) {
	var el = document.getElementById(obj);
  	el.style.display = (el.style.display != 'none' ? 'none' : 'block' );
}

function hideButtonAndDisplayMessage(){
  document.body.appendChild(divWait);
  var button = document.getElementsByTagName('input')[1];
  if(button){
      button.disabled = true;
      button.style.visibility='hidden';
  }
}

// http://stackoverflow.com/questions/6480082/add-a-javascript-button-using-greasemonkey-or-tampermonkey
function handlePages(){
  if(window.location != refreshUrl && window.location != bumpUrl){
    var buttonContainer = document.createElement ('div');
    var hoverContainer = document.createElement('div');
    var refreshButton = '<button id="RefreshButton" type="button" class="customButton">Refresh <i class="icon-external"></i></button>';
    var bumpButton = '<button id="BumpButton" type="button" class="customButton">Bump Version <i class="icon-external"></i></button>';
    var restartButton = '<button id="RestartButton" type="button" class="customButton">Restart splunk <i class="icon-external"></i></button>';

    buttonContainer.innerHTML = refreshButton + bumpButton + restartButton;
    buttonContainer.setAttribute ('id', 'ButtonContainer');
    buttonContainer.setAttribute ('style', 'display:none;');
    //buttonContainer.onmouseout = function(){ document.getElementById('ButtonContainer').style.display = 'none'; };

    document.body.appendChild (buttonContainer);
    document.getElementById ("RefreshButton").addEventListener ("click", refreshAction, false);
    document.getElementById ("BumpButton").addEventListener ("click", bumpAction, false);
    document.getElementById ("RestartButton").addEventListener ("click", restartAction, false);

    hoverContainer.setAttribute ('id', 'HoverContainer');
    hoverContainer.setAttribute ('style', 'left:260px;border:1px solid #BBB');
    hoverContainer.innerHTML = '<i class="icon-external customButton"></i>';
    //hoverContainer.onmouseover = function(){ document.getElementById('ButtonContainer').style.display = 'block'; };
    //hoverContainer.onclick = function(){ document.getElementById('ButtonContainer').style.display = 'none'; };
    hoverContainer.onclick = function(){ toggle('ButtonContainer'); };
    document.body.appendChild(hoverContainer);

    // nav bar not loaded at this point
    var navUl = document.getElementsByClassName("navbar-global-nav nav")[0];
    var navLi = document.createElement('li');
    navLi.innerHTML = hoverContainer;
    //debugger;
  }
  if(window.location == refreshUrl) {
    hideButtonAndDisplayMessage();
    if(document.forms[0]){
      document.forms[0].submit();
    } else {
      // go back to last page before /debug/refresh/
      window.history.go(-2);
    }
  }
  if (window.location == bumpUrl){
    hideButtonAndDisplayMessage();
    //var versionString = document.getElementsByTagName('body')[0].innerText;
    //var version = versionString.substring(versionString.length-3, versionString.length-1);
    //GM_setValue("oldVersion", version);
    var bumped = GM_getValue("bumped");

    if(bumped) {
      // go back to last page before _bump
      GM_setValue("bumped", false);
      window.history.go(-2);
    } else {
      GM_setValue("bumped", true);
      document.forms[0].submit();
    }
  }
}

handlePages();
