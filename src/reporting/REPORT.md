# REPORT

## Artillery
```
Result of profiling with node without console.log

 [Summary]:
   ticks  total  nonlib   name
    109    0.1%   95.6%  JavaScript
      0    0.0%    0.0%  C++
    165    0.2%  144.7%  GC
  94281   99.9%          Shared libraries
      5    0.0%          Unaccounted
```

```
Result of profiling with node with console.log

 [Summary]:
   ticks  total  nonlib   name
    122    0.1%   97.6%  JavaScript
      0    0.0%    0.0%  C++
    178    0.2%  142.4%  GC
  102781   99.9%          Shared libraries
      3    0.0%          Unaccounted
```

## Autocannon
```
Without console.log

Running 20s test @ http://localhost:8081/info
100 connections

┌─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max    │
├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼────────┤
│ Latency │ 223 ms │ 272 ms │ 346 ms │ 371 ms │ 273.49 ms │ 33.41 ms │ 489 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴────────┘
┌───────────┬────────┬────────┬────────┬────────┬────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%  │ Avg    │ Stdev   │ Min    │
├───────────┼────────┼────────┼────────┼────────┼────────┼─────────┼────────┤
│ Req/Sec   │ 300    │ 300    │ 380    │ 459    │ 364.4  │ 46.2    │ 300    │
├───────────┼────────┼────────┼────────┼────────┼────────┼─────────┼────────┤
│ Bytes/Sec │ 516 kB │ 516 kB │ 654 kB │ 790 kB │ 627 kB │ 79.5 kB │ 516 kB │
└───────────┴────────┴────────┴────────┴────────┴────────┴─────────┴────────┘

Req/Bytes counts sampled once per second.

0 2xx responses, 7288 non 2xx responses
7k requests in 20.08s, 12.5 MB read

```

```
With console.log

Running 20s test @ http://localhost:8081/info
100 connections

┌─────────┬────────┬────────┬────────┬────────┬───────────┬─────────┬────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev   │ Max    │
├─────────┼────────┼────────┼────────┼────────┼───────────┼─────────┼────────┤
│ Latency │ 239 ms │ 319 ms │ 401 ms │ 406 ms │ 314.62 ms │ 45.4 ms │ 580 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴─────────┴────────┘
┌───────────┬────────┬────────┬────────┬────────┬────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%  │ Avg    │ Stdev   │ Min    │
├───────────┼────────┼────────┼────────┼────────┼────────┼─────────┼────────┤
│ Req/Sec   │ 201    │ 201    │ 300    │ 401    │ 314.05 │ 51.32   │ 201    │
├───────────┼────────┼────────┼────────┼────────┼────────┼─────────┼────────┤
│ Bytes/Sec │ 346 kB │ 346 kB │ 516 kB │ 690 kB │ 540 kB │ 88.3 kB │ 346 kB │
└───────────┴────────┴────────┴────────┴────────┴────────┴─────────┴────────┘

Req/Bytes counts sampled once per second.

0 2xx responses, 6281 non 2xx responses
6k requests in 20.1s, 10.8 MB read

```



## Graphs

```
With console log

![](/Graphs/Screenshots/con-log.PNG)

```

```
Without console log

![](/Graphs/Screenshots/sin-log.PNG)

```


## Conclusion
Una simple linea de console.log, no hace mucho la diferencia, vemos que los resultados son bastante similares