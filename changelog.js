function collapseSection(e) {
	const list = e.parentElement.querySelector('.updateList');
	const toggled = e.parentElement.getAttribute('toggled');
	list.querySelectorAll('.changelist').forEach(li => {
		if (li.classList.contains('hidden')) {
			li.style.animation = 'fade-out 500ms';
			li.classList.remove('hidden');
		} else {
			li.classList.add('hidden');
		}
	})
	if (toggled == 'on') {
		e.innerHTML = '<i class="fas fa-chevron-circle-right fa-sm"></i>';
		e.parentElement.setAttribute('toggled','off');
		e.parentElement.style.paddingBottom = '1rem';
	} else {
		e.innerHTML = '<i class="fas fa-chevron-circle-down fa-sm"></i>';
		e.parentElement.setAttribute('toggled','on');
		e.parentElement.style.paddingBottom = '0';
	}
}

const jsonChangelog = [
    {
        "updates":[
            "[Fixed] I have fixed some stuff",
            "[New] I have definitely added this",
            "[Improved] This got improved as well"
        ],
        "version":"0.0.2",
        "date":"September 20th, 2020"
    },
    {
        "updates":[
            "[Fixed] I have fixed some stuff",
            "[New] I have definitely added this",
            "[Improved] This got improved as well",
            "[Removed] This stuff got removed",
						"[Removed] This other stuff got removed as well"
        ],
        "version":"0.0.1",
        "date":"September 18th, 2020"
    }
]

function addReleaseNotes(data) {
    const container = document.getElementById('container');
    try {
        if (Array.isArray(data)) {
            data.map(release => {
                let updateContainer = document.createElement('div');
                updateContainer.classList.add("updateContainer","timeline");
                updateContainer.setAttribute('toggled','off');

                //add version
                updateContainer.insertAdjacentHTML('afterbegin',`<span class='updateVersion'>R ${release.version}</span>`);
                //add date
                updateContainer.insertAdjacentHTML('beforeend',`<span class='updateDate'>${release.date}</span>`);
                //add collapser 
                updateContainer.insertAdjacentHTML('beforeend','<div class="collapser"><i class="fas fa-chevron-circle-right fa-sm"></i></div>');

                //create the update list
                let updateList = document.createElement('ul');
                updateList.classList.add('updateList');

                //create a li for each entry
                release.updates.map(update => {
                    // get type of update;
                    const updateType = /^\[(.*)\]/g.exec(update)[1] || null;
                    const updateText = /\]\s(.*)/g.exec(update)[1] || null;
                    
                    if (updateType && updateText) {
                        let changelist = document.createElement('li');
                        changelist.classList.add('changelist');

                        changelist.insertAdjacentHTML('afterbegin',`<span class='type ${updateType.toLowerCase()}'>${updateType}</span>`);
                        changelist.insertAdjacentHTML('beforeend',`<span class='changelistText'>${updateText};</span>`);
                        
                        //add the element
                        updateList.appendChild(changelist);
                    };
                });

                updateContainer.appendChild(updateList);
                container.appendChild(updateContainer);
            });
        } 
    } catch(err) {
        console.log(err);
    }
}

document.getElementById('container').innerHTML = '';
addReleaseNotes(jsonChangelog)
document.querySelectorAll('.collapser').forEach(collapsee => {
	collapsee.addEventListener('click', (event) => {
		collapseSection(collapsee);
	}); 
});