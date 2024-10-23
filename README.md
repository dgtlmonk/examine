# Examine Front End Candidate Assignment

## Overview

Use NextJS, tailwind, and shadcn/ui to build the notification management interface described in this document. This was a real task that our devs did recently, so it’s a good preview of what sort of thing you could work on with us.

  

Let me know if anything is unclear or if you have any feedback.

### Constraints

-   Don’t make a backend — we’re interested in your front end work
    

-   It’s fine if refreshing the page loses all state
    

-   Please use these tools for the assignment:
    

-   [Next](https://nextjs.org/)
    
-   [Tailwind](https://tailwindcss.com/)
    
-   [shadcn/ui](https://ui.shadcn.com/)
    
-   [Lucide icons](https://lucide.dev/)
    
-   If you have a reason for using something else, let me know and we can consider it
    

### What we’re interested in

-   Code quality
    
-   UX quality
    
-   How you collaborate with us to solve the problem (if applicable)
    

### Submission

Submit a github repo that we can pull down and run locally

## The assignment

### Part 1 - Manage save status

-   Make a dummy creatine page
    

-   Can just have a header “Creatine”
    

-   The page has a save button
    

-   Label: “Save page”
    
-   Icon
    

-   bookmark when not saved
    
-   bookmark-check when saved
    

After clicking the save button, the page is saved, and a [sheet](https://ui.shadcn.com/docs/components/sheet) pops up that lets you:

-   Unsave the page
    

-   If page unsaved, use “bookmark” icon
    
-   If page saved, use “bookmark-check” icon
    
-   Note: the mockups show a filled icon, ignore this and use “bookmark” and “bookmark-check”
    

-   Clicking the "page saved" button also opens this sheet again for management
    

Rough mockup:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdzYJdYvegi6AeK_wqm6s9Q-abnhQVoT9vOJoMh_jPJCdp_LHvZ05w2THrGv72icYOMPoX82lVmcoC5PN88-HaYoxJrawyVkqcSpc9RTKAPMoRGj4e8zb5Sugccz18p8SJO9lFzs1m6hTVyF4e5jh9GiIP3?key=EPICO1nsF2BfAVl4JouOjA)

### Part 2 - Manage collections

After saving, the sheet from part 1 pops up. Add to that sheet the ability to add the new saved page to collections

-   Collections have a many to many relationship with saved pages, ie a page can have many collections and a collection can have many saved pages
    
-   Can create a new collection from here if necessary
    

-   The new collection modal is simple:
    

-   Title: "New collection"
    
-   Input field: "Collection name"
    
-   Save button that saves and closes the modal
    
-   Can close without saving:
    

-   With "x" close button in top right
    
-   By clicking outside of the modal
    

Mockups:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeyt1hRUuWgaDFEtADuDedOWWOIB6fnJBCYL2b0ZPqkag_VRzcBYVQnL1alpEauamhLJh1VfOn8_0HepupOGPSBFZw2nbpiTnoc6nLo51uePJtq_2WKaCKcCG8u_b-XLeUM9aK_32zgQr_ZoGtnvZGdyS48?key=EPICO1nsF2BfAVl4JouOjA)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcu_mM-1DK7ylVYV8mZVHuJmuspmdpHIvBJ9LGzBx5fakggmugh-6435Snecp8vNq6CjOUea_p_nhh0YholCy0-vZa_k0ndeAgdNffk5pAluRUFMrsf4CokuhKvYviprwTvwuhtOgSjwqj5IWe2N0RzShVP?key=EPICO1nsF2BfAVl4JouOjA)

### Part 3 - Toggle getting updates about the page

After saving, a [sheet](https://ui.shadcn.com/docs/components/sheet) pops up that lets you:

-   Unsave the page
    

-   This also removes email updates for this page
    

-   Get email updates
    

-   Yes (default)
    
-   No
    

Rough mockup:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcDBHVUcrpRcXWGoTfZAmVL7uv7c0KmUazm4ymauvhp9HvEwKe5n-p-HZCY1iaElwQ7SoKuFig-E_R7P1EVHdgsB4orHxWGAOR9U8yLdONVNe1eS--XV0V7wee2PMwjCdKgS5SqFP-PAVAnPRDX-ctB9lkS?key=EPICO1nsF2BfAVl4JouOjA)
