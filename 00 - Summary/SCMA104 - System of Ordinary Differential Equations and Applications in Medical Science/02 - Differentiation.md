---
share: true
---

# Differentiation

- [[Differentiation]]
- [[Differentiability]]
	- Discontinuous (DNE)
	- Vertex (DNE)
	- Vertical Asymptote ($\pm\infty$)
- Technique for finding derivatives
	- Explicit differentiation vs Implicit differentiation
		- Explicit: $\displaystyle y=f(x)\implies\frac{dy}{dx}=\frac{d}{dx}f(x)$
		- Implicit: $\displaystyle f(x,y)=c\implies\frac{d}{dx}f(x,y)=\frac{d}{dx}c=0$
	- Logarithmic differentiation
		- $\displaystyle\frac{d}{dx}\ln y=\frac{1}{y}\frac{dy}{dx}$
- Applications
	- Increasing-Decreasing function
		- (Strictly)-Increasing function
			- $x_{1}<x_{2}\implies f(x_{1}) < f(x_{2})$
			- Equiv. $f^{\prime}(x)>0$ (sufficient but not necessary)
		- (Strictly)-Decreasing function
			- $x_{1} < x_{2}\implies f(x_{1}) > f(x_{2})$
			- Equiv. $f^{\prime}(x)<0$ (sufficient but not necessary)
	- Convex-Concave function
		- Convex / Concave upwards: Increasing $f^{\prime}$
		- Concave / Concave downwards: Decreasing $f^{\prime}$
		- Point of inflection: Change of concavity ($f^{\prime\prime}(x)=0$ is necessary but insufficient)
	- Extreme value problem
		- Critical point: $f^{\prime}(x)=0$ or $f^{\prime}(x)\sim\text{DNE}$
			- $f^{\prime}(x)$ from positive to negative (decreasing) then local maxima
			- $f^{\prime}(x)$ from negative to positive (increasing) then local minima
			- Otherwise, not a local extrema
		- Stationary point: $f^{\prime}(x)=0$
			- $f^{\prime\prime}(x)<0$ then local maxima
			- $f^{\prime\prime}(x)>0$ then local minima
			- Otherwise, inconclusive
		- Global extrema
			- Interval boundaries
			- Local extrema
## Reference

- Handout SCMA104
