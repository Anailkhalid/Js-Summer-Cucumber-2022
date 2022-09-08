     Feature: WeatherTimeline on homepage

     Scenario: Verify timeline has 12-data points with 2 hours gap from current hour
        Given I am on darksky homepage
        Then I verify timeline has 12-data points with 2 hours gap from current hour



         /**
     * Question - 3: (20-points)
     * 1. Launch darksky.net
     * 2. Scroll to Today's timeline
     * 3. Click on + button
     * 4. Verify minTemp on and in Today's timeline is same
     * 5. Verify maxTemp on and in Today's timeline is same
     */


      Scenario: Verify minTemp and maxTemp on timeline is same
        Given I am on darksky homepage
        When I scroll to Today's timeline
        Then I click on + button
        And I verify minTemp on and in Today's timeline is same
        And I verify maxTemp on and in Today's timeline is same