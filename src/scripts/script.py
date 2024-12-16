import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

import math as math_module
import folium
from folium import PolyLine


from scipy.spatial.distance import cdist
from scipy.spatial import distance_matrix
from ortools.constraint_solver import pywrapcp, routing_enums_pb2
from geopy.geocoders import Nominatim


import plotly.express as px
import plotly.graph_objects as go

import chardet