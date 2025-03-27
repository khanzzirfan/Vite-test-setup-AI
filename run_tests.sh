#!/bin/bash

# Run tests with coverage
npm test -- --coverage

# Check if the tests passed
if [ $? -eq 0 ]; then
  echo "Tests passed successfully."
else
  echo "Some tests failed. Please check the output above for details."
fi
