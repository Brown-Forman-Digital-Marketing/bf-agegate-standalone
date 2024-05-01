import * as bfUtilities from '../utilities.js';

class Agegate extends HTMLFormElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const me = this;
        
        if (!this.init) {
            this.init = true;
   
            bfUtilities.bfDocReady(function(){
                me.setupCountryListener();
                me.setupSubmit();
                me.loadAgegate();
            });
        }
    }

    bodyElementClassCheck(element, excludedElements){
        let excluded = false;
        for (let i = 0; i < excludedElements.length; i++) {
            if (element.classList.contains(excludedElements[i])) {
                excluded = true;
            }
        }
        return excluded;
    }

    /**
     * hide all elements under <body> except for the agegate
     * The bfwfp-util--hidden class adds "display: none !important"
     */
    hideBody() {
        let me = this;
        let body = document.querySelector('body');
        let children = body.children;
        let excludedElements = [
            'bfwpf-agegate__agegate-outer',
            'bf-trust-arc-outer-container',
            'trustarcNoticeFrame',
            'wpadminbar'
        ];

        for (let i = 0; i < children.length; i++) {
            if (excludedElements.includes(children[i].id) === false) {
                children[i].classList.add('bfwpf-util--hidden');
            }
        }
    }

    /**
     * Remove bfwpf-util--hidden class from all elements under <body>
     */
    showBody() {
        //let me = this;
        let body = document.querySelector('body');
        let children = body.children;
        for (let i = 0; i < children.length; i++) {
            children[i].classList.remove('bfwpf-util--hidden');
        }
    }

    setupCountryListener() {
        const me = this;
        if(me.hasCountrySelectElement() && me.hasLdaElement()) {
            me.elements['country'].addEventListener('change', (event) => {
                me.elements['bf_lda_input'].notify(event.target.value);
            });
        }

    }

    hasCountrySelectElement() {
        const me = this;
        return me.elements['country'] && me.elements['country'].hasAttribute('is') && me.elements['country'].getAttribute('is') === 'country-input';
    }

    hasLdaElement() {
        const me = this;
        return me.elements['bf_lda_input'] && me.elements['bf_lda_input'].hasAttribute('is') && me.elements['bf_lda_input'].getAttribute('is') === 'birthdate-input';
    }

    formDataStringify(formData) {
        let object = {};
        formData.forEach((value, key) => object[key] = value);
        object.country = object.country;
        object.birth_date = `${object.birth_year}-${object.birth_month}-${object.birth_day}`;

        return JSON.stringify(object);
    }

    setupSubmit() {
        const me = this;
        const form = document.getElementById("agegate_form");

        form.elements.btn_submit.addEventListener('click', (e) => {
            form.classList.add('validated');
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let f = this;

            //Clear any previous errors
            f.querySelector('[data-name="lda_error_container"]').display = "none";
            f.querySelector('[data-name="lda_error_msg"]').innerHTML = "";

            me.elements.bf_lda_input.removeError();

            let countryVal = me.elements.country.getSelectedOption();
            let targetAge = me.elements.category == 'spirits' ? countryVal.dataset.spiritsLda : countryVal.dataset.wineLda;

            if (me.elements.bf_lda_input.getUserAge() >= targetAge) {
                if(me.elements.remember.checked) {
                    me.setCookie('STYXKEY_lda', 1);
                } else {
                    me.setCookie('STYXKEY_lda', 1, 2);
                }
                me.ageGateSuccessRouting();
            } else {
                me.setCookie('STYXKEY_lda', 0, 1);
                let underageErrorMessage = me.getAttribute('data-under-age-error-message');
                let underageRedirectURL = me.getAttribute('data-under-age-redirect-url');
                me.redirectUnderage(underageErrorMessage, underageRedirectURL);
            }
        });
    }

    ageGateSuccessRouting(){
        let me = this;

        me.hideAgeGate();
        if(me.getAttribute('data-force-reload-on-success') === '1') {
            location.reload();
        }        
    }

    showAgeGate() {
        this.hideBody();
        let ag_oc = document.getElementById('bfwpf-agegate__agegate-outer');

        if(ag_oc.parentElement !== document.body) {
            //If the AG is not an immediate child of the body, append it
            //This generally happens when the AG is in the footer element
            document.body.append(ag_oc);
        }

        ag_oc.classList.add('bfwpf-agegate__cover');
        document.querySelector('html').classList.add('agegate');
    }

    hideAgeGate() {
        let me = this;
        me.showBody();
        document.querySelector('#bfwpf-agegate__agegate-outer').remove();
        document.querySelector('html').classList.remove('agegate');
    }

    loadAgegate() {
        let me = this;
        let underageErrorMessage = me.getAttribute('data-under-age-error-message');
        let underageRedirectURL = me.getAttribute('data-under-age-redirect-url');

        if(me.checkForCookie('STYXKEY_lda')) {
            if(me.getCookie('STYXKEY_lda') == '1') {
                me.hideAgeGate();
            } else {
                me.showAgeGate();
                me.redirectUnderage(underageErrorMessage, underageRedirectURL);
            }
        } else {
            if(me.trustEqualsYes() || me.isBot()) {
                me.setCookie('STYXKEY_lda', 1, 1);
                me.hideAgeGate();
            } else {
                me.showAgeGate();
            }
        }

    }

    setCookie(cname, cvalue, exhours) {
		var d = new Date();
		if (exhours) {
		    d.setTime(d.getTime() + (exhours*60*60*1000));
		} else {
			d.setTime(new Date('January 1, 2038 00:00:00')); //far future date
		}
		var expires = "expires="+d.toUTCString();
	    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
	}

    redirectUnderage(message, url){
        let me = this;
		var el = me.querySelector('[data-name="lda_error_container"]');
        el.style.display = "block";
		el.innerHTML = "<div class='agegate-lockout'><p>"+message+"</p><p>Redirecting in <span id='countdown'>10</span> seconds.</p></div>";
		var count = 10;
		var countdown = setInterval(function(){
            document.querySelector('span#countdown').innerHTML = count;
			if(count === 0){
				clearInterval(countdown);
				window.location.href = url;
			}
			count--;
		}, 1000);
	}

    getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return false;
    }

	checkForCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return true;
        }
        return false;
    }

    trustEqualsYes() {
		return this.getParameterByName('trust') && this.getParameterByName('trust').toLowerCase() == 'yes';
	}

    getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    isBot() {
		//https://support.google.com/webmasters/answer/1061943
		//https://udger.com/resources/ua-list/crawlers?c=1
		var ua = navigator.userAgent.toLowerCase();
		var welcome_bots = [
			'adsbot-google'
			, 'baiduspider'
			, 'bingbot'
			, 'bingpreview'
			, 'facebot'
			, 'facebookexternalhit'
			//, 'google'
			, 'googlebot'
			, 'msnbot'
			, 'slurp'
			, 'yahoo'
			, 'yandex'
		];

		var isbot = false;

		for(var i = 0; i < welcome_bots.length; i++) {
			if (ua.indexOf(welcome_bots[i]) > 0) {
				isbot = true;
				break;
			}
		}

		return isbot;
	}
  }

  customElements.define('bf-agegate', Agegate, {extends: 'form'});