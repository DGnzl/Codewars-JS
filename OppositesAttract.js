function lovefunc(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2;
}

lovefunc(2, 1) // True
lovefunc(2, 6) // False