import React, { useEffect }  from 'react';

function FacebookEmbed() {
    useEffect(() => {
        if (window.FB) {
          window.FB.XFBML.parse();
        }
      }, []);
  return (
    <div>
      {/* Facebook post embed code */}
      <div
      className="fb-post"
      data-href="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fterrencekwilliams%2Fposts%2Fpfbid02oic9eWjvtWpTPUk92LHRZdmqw3obMbGGdUcLcpmuMx7DngSnCjsbMz3unCEVM7uSl&show_text=true&width=500"
      data-width="500"
      ></div>
    </div>
  );
}

export default FacebookEmbed;