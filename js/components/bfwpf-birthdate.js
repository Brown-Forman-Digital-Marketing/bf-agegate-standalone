import * as bfUtilities from './../utilities.js';

class BirthdateInput extends HTMLFieldSetElement {

    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        let me = this;
        me.loaded = false;
        bfUtilities.bfDocReadyWithInit(me, function(){
            me.birthdateSetup();
            me.loaded = true;
        });
    }    

    birthdateSetup() {
        let me = this;
        
        // find legend element in me
        let legend = me.querySelector('legend');

        // find element with data-name lda_error_container
        let errorContainer = me.querySelector('[data-name="lda_error_container"]');

        me.user_detected_iso = me.getCustomAttribute('userDetectedIso', 'FR').toUpperCase();
        me.default_date_format = me.getCustomAttribute('defaultDateFormat', 'mmddyyyy');
        me.classes = me.getCustomAttribute('childrenClasses');

        me.required = me.getCustomAttribute('ldaRequired', false) == '1' ? 'required': '';
        me.mmdddyyyy_list = ["AS", "GU", "KR", "MH", "MP", "UM", "VI", "FM", "US", "BS", "GL", "KE", "PK", "PA", "PH", "PR", "SO", "TG"];
        me.format = me.default_date_format;

        let setup = {
            "day": {
                "name": "birth_day",
                "id": me.dataset.dayId,
                "type": "number",
                "placeholder": me.getCustomAttribute('dayPlaceholder', 'DD'),
                "label_text":  me.getCustomAttribute('dayLabelText', 'Day'),
                "min": "01",
                "max": "31",
                "required": me.required
            },
            "month": {
                "name": "birth_month",
                "id": me.dataset.monthId,
                "type": "number",
                "placeholder": me.getCustomAttribute('monthPlaceholder', 'MM'),
                "label_text":  me.getCustomAttribute('monthLabelText', 'Month'),
                "min": "01",
                "max": "12",
                "required": me.required
            },
            "year": {
                "name": "birth_year",
                "id": me.dataset.yearId,
                "type": "number",
                "placeholder": me.getCustomAttribute('yearPlaceholder', 'YYYY'),
                "label_text":  me.getCustomAttribute('yearLabelText', 'Year'),
                "min": "1900",
                "max": new Date().getFullYear(),
                "required": me.required
            }
        };

        if(me.classes) {
            Object.entries(setup).forEach(([key, value]) => {
                value.class = me.classes;
            })
        }

        //me.innerHTML = legend.outerHTML + errorContainer.outerHTML;

        if(me.format === 'mmddyyyy') {
            me.append(me.getElem(setup.month));
            me.append(me.getElem(setup.day));
        } else {
            me.append(me.getElem(setup.day));
            me.append(me.getElem(setup.month));
        }

        me.append(me.getElem(setup.year));

        // Revisit this at a later time 04/18/24
        //me.setAttribute('data-required', 'true');
        //me.setAttribute('data-custom-validation', 'true');
    }

    getCustomAttribute(name_value, default_value) {
        let me = this;
        if(!default_value) {
            default_value = '';
        }

        return me.dataset.hasOwnProperty(name_value) ? me.dataset[name_value] : default_value;
    }

    getElem(item) {
        let me = this;
        let container = document.createElement('div');
        let elem = document.createElement('input');
        let label = document.createElement('label');
        Object.keys(item).forEach((x)=>{
            if(x === 'required' && item[x] !== 'required') {
                return false;
            }

            if(x === 'label_text') {
                label.textContent = item[x];
            } else {
                elem.setAttribute(x, item[x]);
            }
        });

        //me.setupAutoTabbing(elem);

        label.classList.add('bfwpf-util--sr-only');
        label.setAttribute('for', item.id);

        container.setAttribute('id', item.id+"_container");
        container.setAttribute('class', 'bfwpf-birthdate-input-field-wrapper');
        container.append(label);
        container.append(elem);
        return container;
    }

    notify(iso) {
        let me = this;
        let newFormat = me.mmdddyyyy_list.indexOf(iso) > 0 ? 'mmddyyyy' : 'ddmmyyyy';

        if(newFormat !== me.format) {
            me.format = newFormat;

            let m = me.children[me.dataset.monthId+'_container'];
            let d = me.children[me.dataset.dayId+'_container'];
            let y = me.children[me.dataset.yearId+'_container'];

            me.removeChild(m);
            me.removeChild(d);
            me.removeChild(y);

            if(newFormat === 'mmddyyyy') {
                me.append(m);
                me.append(d);
            } else {
                me.append(d);
                me.append(m);
            }
            me.append(y);
        }
    }

    setupAutoTabbing(elem) {
        let me = this;
        elem.addEventListener('keyup', e => {
            let timer = 0;
            let timeoutval = 100;
            timer = setTimeout(function(){me.userInputCheck(elem, e.which, 1, 2 );}, timeoutval);
        });

    }

    userInputCheck(elem, keyCode, maxSingle, maxLength) {
        let me = this;

		if(me.keycodeIsDigit(keyCode)) {
			let val = elem.value;
			if( ( maxSingle && val > maxSingle ) || val.length === maxLength ) {
                switch(elem.name) {
                    case 'birth_day':
                        if(me.format === 'mmddyyyy') {
                            me.elements[me.dataset.yearId].focus();
                        } else {
                            me.elements[me.dataset.monthId].focus();
                        }
                        break;
                    case 'birth_month':
                        if(me.format === 'mmddyyyy') {
                            me.elements[me.dataset.dayId].focus();
                        } else {
                            me.elements[me.dataset.yearId].focus();
                        }
                        break;
                    case 'birth_year':
                        break;
                }
			}
		}
    }

    keycodeIsDigit(keyCode){
		return ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105));
	}

    setError(msg) {
        let me = this;
        let errorContainer = me.querySelector('[data-name="lda_error_container"]');
        if(errorContainer) {
            errorContainer.style.display = "block";
            errorContainer.querySelector('[data-name="lda_error_msg"]').textContent = msg;
            errorContainer.scrollIntoView();
        }
    }

    removeError() {
        let me = this;

        let errorContainer = me.querySelector('[data-name="lda_error_container"]');
        if(errorContainer) {
            errorContainer.style.display = "none";
            errorContainer.querySelector('[data-name="lda_error_msg"]').textContent = "";
        }
    }

    getBirthdate() {
        let me = this;
        let month = me.elements.birth_month.value;
        let day = me.elements.birth_day.value;
        let year = me.elements.birth_year.value;

        if (!month || !day || !year) {
            return null;
        }

        return new Date(year, month - 1, day);
    }

    getUserAge() {
        let me = this;
        let birthdate = me.getBirthdate();
        if (!birthdate) {
            return null;
        } else {
            let today = new Date();
            let age = today.getFullYear() - birthdate.getFullYear();
            let m = today.getMonth() - birthdate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
                age--;
            }
            return age;
        }

    }

    getLegalDrinkingAge() {
        let me = this;
        let form = me.closest('form.bfwpf-form');
        if (form) {
            let countrySelect = form.querySelector('select[is="country-input"]');
            if (countrySelect) {
                return countrySelect.options[countrySelect.selectedIndex].dataset.spiritsLda;
            }
        }
        return null;
    }

    elementValidate() {
        let age = this.getUserAge();
        let lda = this.getLegalDrinkingAge();

        if(age && lda) {
            if( age >= lda ) {
                me.setCustomValidity('');
                me.reportValidity();
                return true;                
            } else {
                me.setCustomValidity('You must be ' + lda + ' years old to enter this site.');
                me.reportValidity();
                return false;
            }
        }

        me.setCustomValidity('There was an error with this element.');
        me.reportValidity();
        return false;
    }
}

customElements.define('birthdate-input', BirthdateInput, {extends: 'fieldset'});