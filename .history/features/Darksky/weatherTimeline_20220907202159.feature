     Feature: WeatherTimeline

     Scenario: Verify timeline has 12-data points with 2 hours gap from current hour
        Given I am on darksky homepage
        Then I verify timeline has 12-data points with 2 hours gap from current hour