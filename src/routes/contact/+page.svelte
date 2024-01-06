<script>
</script>

<main>
  <div class="center">
    <div>
      <h1 class="titleName">Contact</h1>
      <p class="description">Hieronder staan mijn contactgegevens.</p>
      <p>
        Email:
        <a href="mailto:ytoldenzeel@st.noorderpoort.nl">
          ytoldenzeel@st.noorderpoort.nl
        </a>
      </p>
      <p>
        Nummer:
        <a href="tel:0652003085"> 06-52003085 </a>
      </p>
    </div>
    <form action="#" method="POST">
      <label for="name">Naam:</label>
      <input type="text" id="name" name="name" required />
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <label for="message">Bericht:</label>
      <textarea id="message" name="message" required></textarea>
      <button type="submit">Verstuur</button>
    </form>
  </div>
</main>

<style>
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
  }
  .titleName {
    font-size: 3rem;
    margin: 5px;
    text-align: center;
  }
  .description {
    font-size: 1.5rem;
    margin: 0;
    color: #bababa;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 400px;
  }
  label {
    margin-top: 5px;
    font-size: 1rem;
  }
  input,
  textarea {
    font-size: 1.5rem;
    padding: 2px;
    border-radius: 5px;
    border: 1px solid #bababa;
    resize: vertical;
  }
  button {
    font-size: 1.5rem;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #bababa;
    background-color: #bababa;
    color: #000000;
    cursor: pointer;
  }
  button:hover {
    background-color: #afafaf;
  }
</style>
