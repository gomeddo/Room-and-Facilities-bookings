<h1 align="center">Book a Room for Student Housing</h1>

<p align="center">
  <img src="./src/assets/dashboard.png" alt="Student Housing Dashboard" width="650" height="367">
</p>

# Get started with the GoMeddo JS SDK

This project uses the [GoMeddo JS SDK](https://github.com/gomeddo/js-sdk) to implement an application that lets a user book a room in a student housing via [GoMeddo](https://gomeddo.com).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fgomeddo%2FGoMeddo-Activity-Scheduling-and-Registration&showOptionalTeamCreation=false)

## Demo

You can find a demo [here](https://gomeddo-activity-scheduling-and-registration.vercel.app/home).

## High-Level Use Case

This example provides a starting point for integrating _GoMeddo's_ "**room booking**" capabilities into your website using the Javascript SDK.

The example demonstrates this by allowing students to book a room for student housing at the Amsterdam Metropolitan University. While focused on student housing bookings, it demonstrates the process and structure needed for a range of room booking scenarios.

## Overview of User Interaction on the Frontend

The dashboard of the application lists various available rooms which can be filtered based on room type, price, and group size. Once a user selects a room from available rooms, they can click on the room and view information on that room and select 'Book Now' on the UI. Users will then be prompted to input their contact information and make their reservation for the selected room.

# Step-by-Step Guide to Setting Up The Example

1. **Set Up Resources and Resource Types**:

   - Define the hierarchical structure for your resources:
     - **Organization** > **Country** > **City** > **Student Housing** > **Rooms**.
   - Example:
     - **Organization**: Your Organization
     - **Country**: Netherlands
     - **City**: Amsterdam
     - **Student Housing**: Amsterdam Metropolitan University
     - **Rooms**: Executive Suite
   - Note: There can be multiple resources of the type "Rooms", "City" and, "Student Housing".

2. **Create Reservation Types**:

   - Define a reservation type (e.g., Student Housing).

3. **Create Custom Fields Under the Resource Object**:

   - Add the following custom fields to provide detailed information about each activity:

     - `Housing_Location__c` (Formula Text Field)
     - `Housing_Features__c` (Text Field)
     - `Housing_Rating__c` (Number Field)
     - `Housing_Type__c` (Formula Text Field)
     - `Image_Url_2__c` (Custom Image Field)
     - `Image_Url_3__c` (Custom Image Field)
     - `Image_Url_4__c` (Custom Image Field)

5. **Create Resources**:
   - Create resources for the rooms you want to display on the frontend.
   - Ensure each resource is linked to the appropriate resource type, description, and other custom fields.

Note:

- Ensure that each resource in GoMeddo is marked as '**_isActive_**' and '**_Api Visible_**' to be displayed and available through the API.
- Ensure that **resources**, **resources types**, **custom fields** and **reservation types** are set up in _GoMeddo_. For the student housing system to accurately display available rooms, each room must be created as a resource within _GoMeddo_. This step is vital as the SDK relies on these **resources** to present customers with real-time availability and booking options.

## API Key Requirement

To access to the SDK’s functionalities, an API key from _GoMeddo_ is required. For instructions on obtaining this key refer to [First time Set-up](https://gomeddo.atlassian.net/wiki/spaces/WID/pages/3353837569/First+time+Set-up). Remember to **whitelist** your domain as a part of the setup process and grant **privileged** access to the API key.

### UI Setup

The UI is built as a React website which can be accessed by users to make reservations. The code is organized as a standard React application which communicates with GoMeddo to make reservations.

Perform the following steps to run the project in a local environment.

- Clone the code to a local repository
- Install necessary dependencies and packages by running `npm install`
- Start the local dev server using the command `npm run start`

#### Link to Github and Wiki

For further information on utilizing the GoMeddo Javascript SDK, visit [GoMeddo JS SDK wiki](https://github.com/GoMeddo/js-sdk/wiki).

#### Similar use cases

- Book meeting rooms for corporate events
- Reserve study rooms in libraries
- Schedule conference rooms for business meetings
- Reserve practice rooms for music students
- Book private rooms for therapy sessions
