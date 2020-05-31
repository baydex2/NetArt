import cv2
import numpy as np

im = cv2.imread("juntos.png")
# print(im.shape[0])
value = 1
# im = cv2.resize(im, (int(im.shape[0]*value), int(im.shape[1]*value)))
im2  = cv2.imread("juntos.png")
# im2 = cv2.resize(im2, (int(im2.shape[0]*value), int(im2.shape[1]*value)))

# prueba = np.hstack((im, abs(im - 60)))
resta = 5
for i,j in enumerate(im):
    filter = lambda x: x-resta if x > resta else 0
    for k,l in enumerate(j):
        for x,y in enumerate(l):
            im[i][k][x] = filter(im[i][k][x])
    if i%100 == 0: print(i)

# im = list(   map(lambda x: list(   map(lambda y: list(map(lambda z: z-60 if z > 60 else 0,y)), x)  ), im)         )
# cv2.imshow("", np.hstack((im,im2)))
# cv2.waitKey(0)

cv2.imwrite("juntosa05.png",im)
# print(im)