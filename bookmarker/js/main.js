//Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

//Save Bookmark
function saveBookmark(e){
	//Get form values
	var siteName =document.getElementById('siteName').value;
	var siteUrl =document.getElementById('siteUrl').value;

	var bookmark = {
		name: siteName,
		url: siteUrl
	}

	/*
	  // Local Storage Test
	  LocalStorage.setItem('test', 'Hello World');
	  console.Log(LocalStorage.getItem('test'));
	  LocalStorage.removeItem('test');
	  console.Log(LocalStorage.getItem('test'));
	 */
	 
	 //  Test if bookmarks is null
	 if(localStorage.getItem('bookmarks') === null){
        // Init array
        var bookmarks = [];
        // Add to array
        bookmarks.push(bookmark);
        // Set to localStorage
         localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
     } else {
          // Get bookmarks from LocalStorage
          var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
          // Add bookmark to array
          bookmarks.push(bookmark);
          // Re-set back to LocalStorage
          localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
         }
  

     // Prevent form from submitting
     e.preventDefault();
   }

// Fetch bookmarks
function fetchBookmarks(){
	// Get bookmarks from LocalStorage
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	// Get output id
	var bookmarksResults = document.getElementById('bookmarksResults');

	//Build output
	bookmarksResults.innerHTML = '';
	for (var i = 0; i < bookmarks.length; i++) {
		 var name = bookmarks[i].name;
		 var url = bookmarks[i].url;


	bookmarksResults.innerHTML += ;
	}
}