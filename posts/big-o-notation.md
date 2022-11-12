---
title: "Big-O-Notation"
date: "2022-11-10"
tag: "DS-and-Algorithms"
---

# Big-O-Notation

Big O Notation is basically a way to assess how complex a certain algorithm is. This usually associated with **time** and **space**. Time complexity looks at the relative time an algorithm will take to run as the input grows larger. Space complexity looks at the relative space needed.

## Constant `O(1)`

Always takes the same amount of time or space regardless of input.

## Linear `O(n)`

Grows linearly as the input grows. So, if you put in double the input, then the algorithm should theoretically take twice as long to run. Essentially, as ‘N’ grows, so does the time or space.

## Factorial `O(n!)`

Grows massively as the input grows. Usually seen in functions that look at all of the possible permutations of a given list etc.…

## Logarithmic `O(log n)`

Better than linear as the amount of work needing to be completed would half on each iteration of a given loop in the algorithm. _Example: Finding an item in a sorted array with binary search_.

## Logarithmic `O(n log n)`

Better than linear but worse than `O(log n` . _Example: Performing a [fast Fourier transform](https://en.wikipedia.org/wiki/Fast_Fourier_transform), fastest possible [comparison sort,](https://en.wikipedia.org/wiki/Comparison_sort) [heapsort](https://en.wikipedia.org/wiki/Heapsort) and [merge sort](https://en.wikipedia.org/wiki/Merge_sort)._

## Quadratic `O(n^2)`

Growth is n * n. *Example: simple sorting algorithms such as bubble sort, insertion sort and selection sort.\*

<img src="/public/images/big-o-notation-algorithm-complexity.png" alt="bigOGraph">

**This isn’t an exhaustive list.**

ibi.
