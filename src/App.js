import React from 'react';

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ActivitiesForm from './Components/Activities/ActivitiesForm';
import CategoriesForm from './Components/Categories/CategoriesForm';
import NewsForm from './Components/News/NewsForm';
import SlidesForm from './Components/Slides/SlidesForm';
import TestimonialForm from './Components/Testimonials/TestimonialsForm';
import UserForm from './Components/Users/UsersForm';
import SchoolCampaign from './Campaigns/School/SchoolCampaign';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';
import MembersForm from './Components/Members/MembersForm';
import ProjectsForm from './Components/Projects/ProjectsForm';
import NewsDetail from './Components/News/Detail/Index';
import Organization from './Components/Organization/Organization';
import MembersCreateEdit from './Components/Members/MembersCreateEdit';
import UpdateDataForm from './Components/Organization/UdpateDataForm';
import ActivitiesDetail from './Components/Activities/Detail/ActivitiesDetail';
import HomeForm from './Components/Home/HomeForm';
import NewsDisplay from './Components/News/NewsDisplay';
import LoginForm from './Components/Auth/LoginForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={} />
          <Route path="/activities/:id" component={ActivitiesDetail} />
          <Route path="/backoffice/create-slide" component={SlidesForm} />
          <Route path="/backoffice/home" component={HomeForm} />
          <Route path="/backoffice/members/edit/:id" component={MembersCreateEdit} />
          <Route path="/backoffice/members/edit" component={MembersCreateEdit} />
          <Route path="/backoffice/news/:id" component={NewsForm} />
          <Route path="/backoffice/news/" component={NewsForm} />
          <Route path="/backoffice/organization/edit" component={UpdateDataForm} />
          <Route path="/create-activity" component={ActivitiesForm} />
          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/create-member" component={MembersForm} />
          <Route path="/create-news" component={NewsForm} />
          <Route path="/create-project" component={ProjectsForm} />
          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/create-user" component={UserForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/news" component={NewsDisplay}/>
          <Route path="/novedades/:id" component={NewsDetail} />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} />
          <Route path="/backoffice/organization" component={Organization} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
