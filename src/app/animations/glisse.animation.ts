// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const glisseAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('glisseAnimation', [

        // end state styles for route container (host)
        state('*', style({
            
        })),

        // route 'enter' transition
        transition(':enter', [

            // styles at start of transition
            style({
                // start with the content positioned off the right of the screen, 
                // -400% is required instead of -100% because the negative position adds to the width of the element
                marginLeft: '200px',
                opacity:0
            }),

            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the right position to 0 which slides the content into view
                marginLeft: '0px',
                opacity:1
            }))
        ]),

        // route 'leave' transition
        transition(':leave', [
            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the right position to -400% which slides the content out of view
                marginLeft: '-200px',
                opacity:0
            }))
        ])
    ]);