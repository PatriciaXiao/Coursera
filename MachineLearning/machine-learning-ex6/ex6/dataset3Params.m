function [C, sigma] = dataset3Params(X, y, Xval, yval)
%EX6PARAMS returns your choice of C and sigma for Part 3 of the exercise
%where you select the optimal (C, sigma) learning parameters to use for SVM
%with RBF kernel
%   [C, sigma] = EX6PARAMS(X, y, Xval, yval) returns your choice of C and 
%   sigma. You should complete this function to return the optimal C and 
%   sigma based on a cross-validation set.
%

% You need to return the following variables correctly.
C = 1;
sigma = 0.3;

% ====================== YOUR CODE HERE ======================
% Instructions: Fill in this function to return the optimal C and sigma
%               learning parameters found using the cross validation set.
%               You can use svmPredict to predict the labels on the cross
%               validation set. For example, 
%                   predictions = svmPredict(model, Xval);
%               will return the predictions on the cross validation set.
%
%  Note: You can compute the prediction error using 
%        mean(double(predictions ~= yval))
%

%%%% Task 1.2.3 %%%
%% the candidate values of C and sigma
%C_candidates = [0.01 0.03 0.1 0.3 1.0 3.0 10.0 30.0]; % C
%S_candidates = [0.01 0.03 0.1 0.3 1.0 3.0 10.0 30.0]; % sigma
%%% minimized error; initialized as a value larger than the possible first iteration value
%% Error = intmax;
%% maximized precision instead; donot need to worry about accuracy would < 0
%MaxAccuracy = 0;
%% try all combinations
%for i = C_candidates,
%	for j = S_candidates,
%		% calculate model/prediction/error for these C and sigma values
%		model = svmTrain(X, y, i, @(x1, x2) gaussianKernel(x1, x2, j));
%		pred = svmPredict(model, Xval);
%		% predError = mean(double(pred ~= yval));
%		% if (predError <= Error)
%		% 	Error = predError;
%		% 	C = i;
%		% 	sigma = j;
%		% end;
%		% if we use accuracy instead:
%		accuracy = mean(double(pred == yval));
%		% fprintf(['Trained an SVM with parameter C = %f, sigma = %f, accuracy = %f\n'], i, j, accuracy);
%		if (accuracy > MaxAccuracy)
%			MaxAccuracy = accuracy;
%			C = i;
%			sigma = j;
%		end;
%		fprintf(['tmp solution: SVM with parameter C = %f, sigma = %f, accuracy = %f\n'], C, sigma, MaxAccuracy);
%	end;
%end;
%%%% End 1.2.3 %%%

%%% Result 1.2.3 %%%
% it was too slow
C = 1;
sigma = 0.1;
%%% End Result %%%



% =========================================================================

end
