//######################################################
            //media queries
//######################################################

// ----------------------navbar media quries----------------------

const topnavLink = document.querySelectorAll('#topnav-link')
const topnavIcon = document.getElementById('topnav-link-icon')

function navMediaQuery(maxWidth) {
    console.log('matches')
    if (maxWidth.matches) {
        for (var link of topnavLink) {
            link.style.display = 'none'
        }
        topnavIcon.style.float = 'right'
        topnavIcon.style.display = 'block'
        
    } else {
        for (var link of topnavLink) {
            link.style.display = 'block'
        }
        
        topnavIcon.style.display = 'none'
    }

}

const topnavMQC = window.matchMedia('(max-width: 815px)')

navMediaQuery(topnavMQC)
topnavMQC.addListener(navMediaQuery)

const overlayLink = document.querySelectorAll('#overlay-link')
const overlayCloseBtn = document.querySelector('#overlay-closebtn')

function overlayMediaQuery(maxWidth) {
    if (maxWidth.matches) {
        for (var link of overlayLink) {
            link.style.fontSize = '20px'
        }
        overlayCloseBtn.style.fontSize = '40px'
        overlayCloseBtn.style.top = '25%'
        overlayCloseBtn.style.right = '35px'
    } else {
        for (var link of overlayLink) {
            link.style.fontSize = '36px'
        }
        overlayCloseBtn.style.fontSize = '60px'
        overlayCloseBtn.style.top = '15%'
        overlayCloseBtn.style.right = '45px' 
    }
}

const overlayMQ = window.matchMedia('(max-width: 450px)')
overlayMediaQuery(overlayMQ)
overlayMQ.addListener(overlayMediaQuery)


//-------------------sections media queries---------------

const servicesSecGrid = document.querySelectorAll('#services-grid-row div')
const serviceSecDiv = document.querySelector('#services')

function serviceSecMediaQueryTab(tabMaxWidth) {
    
    if (tabMaxWidth.matches) {
        for (var cell of servicesSecGrid) {
            cell.classList.remove('col-3')
            cell.classList.remove('col-12')
            cell.classList.add('col-6')
            // cell.classList.add('')
        }
        // serviceSecDiv.style.height = '120vh'
    } else {
        for (var cell of servicesSecGrid) {
        cell.classList.remove('col-6')
        cell.classList.remove('col-12')
        cell.classList.add('col-3')
        }
        // serviceSecDiv.style.height = '120vh'
    }
}

function serviceSecMediaQueryMobi(mobiMaxWidth) {
    if (mobiMaxWidth.matches) {
        for (var cell of servicesSecGrid) {
        cell.classList.remove('col-3')
        cell.classList.remove('col-6')
        cell.classList.add('col-12')
        }
        // serviceSecDiv.style.height = '300vh'
    } else {
        for (var cell of servicesSecGrid) {
        cell.classList.remove('col-12')
        cell.classList.remove('col-6')
        cell.classList.add('col-3')
        }
        // serviceSecDiv.style.height = '120vh'
    }
}

const serviceSecMQTab = window.matchMedia('(max-width: 815px)')
const serviceSecMQMobi = window.matchMedia('(max-width: 450px)')

serviceSecMediaQueryTab(serviceSecMQTab)
serviceSecMQTab.addListener(serviceSecMediaQueryTab)

serviceSecMediaQueryMobi(serviceSecMQMobi)
serviceSecMQMobi.addListener(serviceSecMediaQueryMobi)



//######################################################
            // functions
//######################################################

//-------------------topnav functions---------------------
const overlayNav = document.querySelector('#myOverlayNav')
const topnav = document.querySelector('#myTopnav')

function openNav() {
    overlayNav.style.height = '100%'
}

function closeNav() {
    overlayNav.style.height = '0%'
}

window.onscroll = function() {stickNavToTop()
                              parallaxAdsec()}

var topNavSticky = topnav.offsetTop

function stickNavToTop() {
    if (window.pageYOffset >= topNavSticky) {
        topnav.classList.add('sticky')
    } else {
        topnav.classList.remove('sticky')
    }
}

//-----------------.advert functions---------------------
const adsec = document.querySelector('#advert img')

var adsecSticky = adsec.offsetTop

function parallaxAdsec() {
    if (window.pageYOffset >= adsecSticky) {
        adsec.style.backgroundAttachment = 'fixed'
    } else {
        adsec.style.backgroundAttachment = 'scroll'
    }
}