import sys
from PIL import Image, ImageFilter
import numpy as np
from scipy import ndimage

src = Image.open(sys.argv[1]).convert("RGB")
im = np.asarray(src).astype(int)
h, w, _ = im.shape
r, b = im[..., 0], im[..., 2]
v = im.max(axis=2)
warm = r - b

ys, xs = np.mgrid[0:h, 0:w]
wall_area = ys < np.where(xs < 312, 722, 714)

box = (xs > 750) & (xs < 1310) & (ys > 260) & (ys < 900)
core = box & ((warm > 30) | (v < 100))
core = ndimage.binary_opening(core, iterations=1)
labels, n = ndimage.label(core)
sizes = ndimage.sum(core, labels, range(1, n + 1))
core = np.isin(labels, 1 + np.where(sizes > 40)[0])
near = ndimage.binary_dilation(core, iterations=3)
edge_wall = np.clip((28 - warm) / 9, 0, 1) * np.clip((v - 95) / 30, 0, 1)
alpha = np.where(core, 0.0, np.where(near, edge_wall, 1.0)) * wall_area
alpha_img = Image.fromarray((alpha * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.9))

out = Image.new("RGBA", alpha_img.size, (0, 0, 0, 0))
out.putalpha(alpha_img)
out.save(sys.argv[2], optimize=True)

