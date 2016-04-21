function idx = findClosestCentroids(X, centroids)
%FINDCLOSESTCENTROIDS computes the centroid memberships for every example
%   idx = FINDCLOSESTCENTROIDS (X, centroids) returns the closest centroids
%   in idx for a dataset X where each row is a single example. idx = m x 1 
%   vector of centroid assignments (i.e. each entry in range [1..K])
%

% Set K
K = size(centroids, 1);

% You need to return the following variables correctly.
idx = zeros(size(X,1), 1);

% ====================== YOUR CODE HERE ======================
% Instructions: Go over every example, find its closest centroid, and store
%               the index inside idx at the appropriate location.
%               Concretely, idx(i) should contain the index of the centroid
%               closest to example i. Hence, it should be a value in the 
%               range 1..K
%
% Note: You can use a for-loop over the examples to compute this.
%

%%% Task 1.1.1 Finding closest centroids %%%
% c(i):= j that minimizes ||x(i) − µj||^2
% note that this code must work with points in an n-dimensional 
% euclidean space (not just 2)
for i = 1:size(X, 1),  % loop over data points in X, for each row in X
	x_row = X(i, :);
	% the euclidean distance of the first centroid	
	j = 1;
	min = (centroids(j, :) - x_row) * (centroids(j, :) - x_row)';
	idx(i) = j;			
	% loop through all the (rest of) centroids to reach minimum
	for j = 2:size(centroids, 1)
		dist = (centroids(j, :) - x_row) * (centroids(j, :) - x_row)';
		if (dist < min)
			min = dist;
			idx(i) = j;
		endif;
	end;	
end;
%%% End Task 1.1.1 %%%





% =============================================================

end

