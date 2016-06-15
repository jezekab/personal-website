<?php

  if () {
    echo "<h3>Contact Me?</h3>
    <p>I'm down for design, <span class='code'>&lt;web /&gt;</span> & other cool projects.</p>

    <form action='form.php' method='POST'>
      <input name='email' placeholder='Your email here...' type='text' required >
      <textarea name='message' placeholder='Your message here...' required></textarea>
      <input name='Hello' id='send' type='submit' value='Send'>

    </form>"

  } else {
    echo "<h3>Contact Me?</h3>
    <p>I'm down for design, <span class='code'>&lt;web /&gt;</span> & other cool projects.</p>

    <h4 id='sent'>
      Thanks for your message! How about following me on social media?
    </h4>"
  }

?>
