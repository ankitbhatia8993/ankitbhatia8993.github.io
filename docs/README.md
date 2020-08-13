---
pageClass: home-page
# some data for the components

name: Ankit Bhatia
profile: /profile.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/ankitbhatia8993
  - title: linkedin
    icon: "/icons/linkedin.svg"
    link: https://www.linkedin.com/in/ankitbhatia8993/
  - title: instagram
    icon: "/icons/instagram.svg"
    link: https://www.instagram.com/iankitbhatia/
  - title: email
    icon: "/icons/email.svg"
    link: 'mailto:ankitbhatia8993@gmail.com'

<!-- cv: https://www.linkedin.com/in/ankitbhatia8993/ -->
bio: Developer at DocOn (A subsidiary of PharmEasy - India's Leading Medicine Ordering App)
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

Experienced Software Engineer with a demonstrated history of working in the e-commerce industry. Skilled in Python and Java. Strong engineering professional with a Bachelor of Technology (B.Tech.) focused in Computer Science from [Indian Institute of Information Technology](https://en.wikipedia.org/wiki/Indian_Institute_of_Information_Technology,_Allahabad) :mortar_board:


## Programming Skills

- [Languages] - Python and Java
- [Databases] - MySQL, PostgreSQL, ElasticSearch and Redis 
- [Other tools & frameworks] - RabbitMQ, git, Spring and Django

## Experiences & Education

- **Principal Software Engineer - [Docon](https://docon.co.in) - [Pharmeasy](https://pharmeasy.in)** <br/>
[October 2019 - Today] <br/><br/>

- **Senior Software Engineer - [Myntra](https://myntra.com)** <br/>
[September 2017 - October 2019] <br/>
<p> Built a fashion trends system to make Myntra catalog more trendy and more profitable.</p>
<br/>

- **Software Engineer - [Myntra](https://myntra.com)** <br/>
[July 2015 - September 2017] <br/>
<dl> 
<dt> Myntra-Jabong Integration </dt>
<dd> - Led integration of Myntra Seller system applications with Jabong platform. </dd>
<dd> - Worked with the core team making Myntra applications multi-tenant. </dd>
</br>
<dt> Myntra Platform </dt>
<dd> - Revamped Myntra Vendor Management System (ExtJS to ReactJS). </dd>
<dd> - Developed front-end and back-end for Vendor Stock Movement tool. (Vendor Portal adoption was increased by 21%) </dd>
<dd> - Redesign and Redevelopment of Vendor Discount Management System tool(back-end). </dd>
<dd> - One of the three developers of Manufacturing Tracking Application. </dd>
<dd> - Developed Seller Reporting feature of Seller Payment System (Integration with Citrus). </dd>
<dd> - One of the two developers of Inbound Logistics Android App. </dd>
</dl>
<br/>

- **Software Engineer Internship - [Myntra](https://myntra.com)** <br/>
[January 2015 - July 2015] <br/>
<p>Developed back end for Seller Scorecard based on important factors like delivery time, revenue, order count, quality, amongst others. </p> <br/>

- **B.Tech - Indian Institute of Information Technology, Allahabad** <br/>
[July 2011 - June 2015] <br/>
<dl> 
<dt> - Artificial Intelligence </dt>
<dt> - Data Structures & Algorithms </dt>
<dt> - Database Management System </dt>
<dt> - Design and Analysis of Algorithms </dt>
<dt> - Operating System </dt>
<dt> - Computer Networking </dt>
</dl>

## Projects
</br>
<img src="/projects/1.png" width="800px">

<!-- [→ Full list](/projects/) -->

<!-- <ProjectCard image="/projects/1.png" hideBorder=true>
 
  **The Making of Harry Potter's Wand**

  Harry P., Hermione G., *et al*
  
  Harry's wand was broken in 1997, but was repaired by him after the 1998 Battle of Hogwarts. Usually the repair of a wand is impossible, but with the use of the Elder Wand it was achievable.
  
  [[PDF](https://www.google.com)] [[arXiv](https://arxiv.org)]

</ProjectCard> -->

<!-- <ProjectCard hideBorder=true>

  **Harry Potter and the Deathly Hallows**
  
  In the epilogue of Deathly Hallows, which is set 19 years after Voldemort's death, Harry and Ginny are a couple and have three children: James Sirius Potter, who has already been at Hogwarts for at least one year, Albus Severus Potter, who is starting his first year there, and Lily Luna Potter, who is two years away from her first year at the school.

  [[Link](https://www.google.com)]

</ProjectCard> -->


## Awards & Honors

- Scored 220/480 in IIT-Joint Entrance Exam’11.
- Secured an All India Rank of 8539 out of 10,65,100 in All India Engineering
Entrance Examination’11 with a state rank of 1272 (Rajasthan).
- Awarded CBSE Merit Incentive Scholarship every semester during college.
- Awarded scholarship in 10th and 12th standard for being the 2nd rankholder
in school.


<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
