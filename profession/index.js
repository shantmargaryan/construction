const heroLinks = document.querySelectorAll('.home-hero__link');
const servicesLink = document.querySelectorAll('.specialists__link');
const electricityLink = document.querySelectorAll('.electricity__services-link');


servicesLink.forEach(link => {
  link.addEventListener('click', e => {
    localStorage.removeItem('content');
    if (link.dataset.link === 'electricity') {
      localStorage.setItem('content', JSON.stringify(object.electricity));
    } else if (link.dataset.link === 'heating') {
      localStorage.setItem('content', JSON.stringify(object.heating));
    } else if (link.dataset.link === 'painting') {
      localStorage.setItem('content', JSON.stringify(object.painting));
    } else if (link.dataset.link === 'renovation') {
      localStorage.setItem('content', JSON.stringify(object.renovation));
    } else if (link.dataset.link === 'roofing') {
      localStorage.setItem('content', JSON.stringify(object.roofing));
    } else if (link.dataset.link === 'sanitary') {
      localStorage.setItem('content', JSON.stringify(object.sanitary));
    }
    link.nextElementSibling.click()
  })
});

heroLinks.forEach(link => {
  link.addEventListener('click', e => {
    localStorage.removeItem('content');
    if (link.dataset.link === 'electricity') {
      localStorage.setItem('content', JSON.stringify(object.electricity));
    } else if (link.dataset.link === 'heating') {
      localStorage.setItem('content', JSON.stringify(object.heating));
    } else if (link.dataset.link === 'painting') {
      localStorage.setItem('content', JSON.stringify(object.painting));
    } else if (link.dataset.link === 'renovation') {
      localStorage.setItem('content', JSON.stringify(object.renovation));
    } else if (link.dataset.link === 'roofing') {
      localStorage.setItem('content', JSON.stringify(object.roofing));
    } else if (link.dataset.link === 'sanitary') {
      localStorage.setItem('content', JSON.stringify(object.sanitary));
    }
    link.nextElementSibling.click()
  })
});


electricityLink.forEach(link => {
  link.addEventListener('click', e => {
    localStorage.removeItem('content');
    if (link.dataset.link === 'electricity') {
      localStorage.setItem('content', JSON.stringify(object.electricity));
    } else if (link.dataset.link === 'heating') {
      localStorage.setItem('content', JSON.stringify(object.heating));
    } else if (link.dataset.link === 'painting') {
      localStorage.setItem('content', JSON.stringify(object.painting));
    } else if (link.dataset.link === 'renovation') {
      localStorage.setItem('content', JSON.stringify(object.renovation));
    } else if (link.dataset.link === 'roofing') {
      localStorage.setItem('content', JSON.stringify(object.roofing));
    } else if (link.dataset.link === 'sanitary') {
      localStorage.setItem('content', JSON.stringify(object.sanitary));
    }
    link.nextElementSibling.click()
  })
});


const object = {
  electricity: {
    title: 'Electricity',
    text: `Electricity is the set of physical phenomena associated with the presence and motion of matter that has a
    property of electric charge. In early days, electricity was considered as being not related to magnetism.
    Later on, many experimental results and the development of Maxwell’s equations indicated that both
    electricity
    and magnetism are from a single phenomenon: electromagnetism. Various common phenomena are related to
    electricity, including lightning, static electricity, electric heating, electric discharges and many others.
    The presence of an electric charge, which can be either positive or negative, produces an electric field.
    The
    movement of electric charges is an electric current and produces a magnetic field.`,
    img: [
      'images/electricity-img-4.jpg',
      'images/electricity-img-3.jpg',
      'images/electricity-img-2.jpg',
      'images/electricity-img-2.jpg'
    ]
  },
  heating: {
    title: 'Heating',
    text: `Electricity is the set of physical phenomena associated with the presence and motion of matter that has a
    property of electric charge. In early days, electricity was considered as being not related to magnetism.
    Later on, many experimental results and the development of Maxwell’s equations indicated that both
    electricity
    and magnetism are from a single phenomenon: electromagnetism. Various common phenomena are related to
    electricity, including lightning, static electricity, electric heating, electric discharges and many others.
    The presence of an electric charge, which can be either positive or negative, produces an electric field.
    The
    movement of electric charges is an electric current and produces a magnetic field.`,
    img: [
      'images/electricity-img-4.jpg',
      'images/electricity-img-3.jpg',
      'images/electricity-img-2.jpg',
      'images/electricity-img-1.jpg'
    ]
  },
  painting: {
    title: 'Painting',
    text: `Electricity is the set of physical phenomena associated with the presence and motion of matter that has a
    property of electric charge. In early days, electricity was considered as being not related to magnetism.
    Later on, many experimental results and the development of Maxwell’s equations indicated that both
    electricity
    and magnetism are from a single phenomenon: electromagnetism. Various common phenomena are related to
    electricity, including lightning, static electricity, electric heating, electric discharges and many others.
    The presence of an electric charge, which can be either positive or negative, produces an electric field.
    The
    movement of electric charges is an electric current and produces a magnetic field.`,
    img: [
      'images/electricity-img-3.jpg',
      'images/electricity-img-4.jpg',
      'images/electricity-img-1.jpg',
      'images/electricity-img-2.jpg'
    ]
  },
  renovation: {
    title: 'Renovation',
    text: `Electricity is the set of physical phenomena associated with the presence and motion of matter that has a
    property of electric charge. In early days, electricity was considered as being not related to magnetism.
    Later on, many experimental results and the development of Maxwell’s equations indicated that both
    electricity
    and magnetism are from a single phenomenon: electromagnetism. Various common phenomena are related to
    electricity, including lightning, static electricity, electric heating, electric discharges and many others.
    The presence of an electric charge, which can be either positive or negative, produces an electric field.
    The
    movement of electric charges is an electric current and produces a magnetic field.`,
    img: [
      'images/electricity-img-4.jpg',
      'images/electricity-img-3.jpg',
      'images/electricity-img-2.jpg',
      'images/electricity-img-2.jpg'
    ]
  },
  roofing: {
    title: 'Roofing',
    text: `Electricity is the set of physical phenomena associated with the presence and motion of matter that has a
    property of electric charge. In early days, electricity was considered as being not related to magnetism.
    Later on, many experimental results and the development of Maxwell’s equations indicated that both
    electricity
    and magnetism are from a single phenomenon: electromagnetism. Various common phenomena are related to
    electricity, including lightning, static electricity, electric heating, electric discharges and many others.
    The presence of an electric charge, which can be either positive or negative, produces an electric field.
    The
    movement of electric charges is an electric current and produces a magnetic field.`,
    img: [
      'images/electricity-img-4.jpg',
      'images/electricity-img-3.jpg',
      'images/electricity-img-2.jpg',
      'images/electricity-img-2.jpg'
    ]
  },
  sanitary: {
    title: 'Sanitary',
    text: `Electricity is the set of physical phenomena associated with the presence and motion of matter that has a
    property of electric charge. In early days, electricity was considered as being not related to magnetism.
    Later on, many experimental results and the development of Maxwell’s equations indicated that both
    electricity
    and magnetism are from a single phenomenon: electromagnetism. Various common phenomena are related to
    electricity, including lightning, static electricity, electric heating, electric discharges and many others.
    The presence of an electric charge, which can be either positive or negative, produces an electric field.
    The
    movement of electric charges is an electric current and produces a magnetic field.`,
    img: [
      'images/electricity-img-4.jpg',
      'images/electricity-img-3.jpg',
      'images/electricity-img-2.jpg',
      'images/electricity-img-2.jpg'
    ]
  },
};