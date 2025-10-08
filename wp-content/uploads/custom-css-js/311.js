<!-- start Simple Custom CSS and JS -->
<script>
document.addEventListener("DOMContentLoaded", function() {
  const taglines = [
    "gaming",
    "wowwee go play gamse", //cool war //me
    "Also check out: Not-So-Distant Sun", //faraway moon //still considering that game
    "they should put bees on the moon", //atm10 //me/that productive bees game if I go through with it
	"fly me to the [see above]", //frank sinatra //faraway moon
	"Popular vacation spot!", //get it cause the tower is wait that's a spoiler
	"Not the worst place to be stranded!", //stranded spaceship
	"why is there a fox in my toaster", //toaste a la foxe
	"Taking nonsense seriously", //MMMM //me
	"Are We Celestial Yet?", //AWCY //faraway moon
	"Gamedevs Against Websites", //GAW //me
	"salvage not included", //oxygen not included //salvage planet
	"So many transportation-based games!", //road trip, space trip, wandering tinkerers, ice journey
	"Live for the Show, d-wait WHAT?", //ie for the show
	"Talks of turbulent seas", //devil's lighthouse //whirlpull/alyx
	"10,003,008,528^42", //transcendental cha-cha time //me
	//"The right route down a dusty lane", //"You've gone the right route down a dusty lane!" //inexplicable //me
	"I am super mega ultra busy everyday", //bitches gonna try to remove my ladder //me
	"I’m not a man, you see; I just recall", //attacked by a whale? //me
	"Summoned by a call buried in us all", //wait a wHale? named Joey?? //me
	"Checking off a guest list...", //charlie has his own inferno?? //me
	"Abandon all hope, all ye who enter" //he DOES wow hope he doesn't burn //me
  ];
  const chosen = taglines[Math.floor(Math.random() * taglines.length)];
  const el = document.querySelector('.site-description'); // adjust selector if different
  if (el) el.textContent = chosen;
});
</script><!-- end Simple Custom CSS and JS -->
