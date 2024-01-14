const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a");
const body = document.querySelector("body");

body.addEventListener
("mouseleave", () =>
    {
        cursor.classList.add("mouse-hidden");
    }
)
body.addEventListener
("mouseenter", () =>
    {
        cursor.classList.remove("mouse-hidden");
    }
)

window.addEventListener
("mousedown", () =>
    {
        cursor.classList.add("clicks");
    }
)

window.addEventListener
("mouseup", () =>
    {
        cursor.classList.remove("clicks");
    }
)

window.addEventListener
("mousemove", (e) =>
    {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
        links.forEach
        (link =>
            {
                link.addEventListener
                ("mouseover", () =>
                    {
                        cursor.classList.add("hover");
                    }
                )
                link.addEventListener
                ("mouseout", () =>
                    {
                        cursor.classList.remove("hover");
                    }
                )
            }
        )
    }
)

const scroll = new LocomotiveScroll
(
    {
        el: document.querySelector('.fullScroll'),
        smooth: true
    }
);

const page = document.querySelectorAll('.scrolly');

page.forEach
( (item) =>
    {
        item.addEventListener
        ('click', () =>
            {
                if (item.id == 0)
                {
                    console.log(item.id)
                    scroll.scrollTo('#main');
                }
                else if (item.id == 1)
                {
                    scroll.scrollTo('#trending');
                }
                else if (item.id == 2)
                {
                    scroll.scrollTo('#FAQ');
                }
            }
        )
    }
)

const plus = document.querySelectorAll('.plus');
const que = document.querySelectorAll('.ques');
const ans = document.querySelectorAll('.answer');
let flag = true;

plus.forEach
( (item) =>
    {
        item.addEventListener
        ('click', () =>
            {
                console.log (item.id);
                if (flag)
                {
                    item.style.transform = "rotate(45deg)";
                    que[item.id].style.height = "120px";
                    ans[item.id].style.borderTop = "1px solid #414141";
                    ans[item.id].style.display = "block";
                    flag = false;
                }
                else
                {
                    item.style.transform = "rotate(0deg)";
                    que[item.id].style.height = "50px";
                    ans[item.id].style.borderTop = "1px solid #212121";
                    ans[item.id].style.display = "none";
                    flag = true;
                }
            }
        );
    }
)

const menu = document.querySelector('.menu');
let fl = true;

menu.addEventListener
('click', () =>
    {
        const path1 = document.querySelector('.plus1');
        const path2 = document.querySelector('.plus2');
        if (fl)
        {
            path1.classList.add('active1');
            path2.classList.add('active2');
            fl = false;
        }
        else
        {
            path1.classList.remove('active1');
            path2.classList.remove('active2');
            fl = true;
        }
    }
)

const container = document.querySelector("#yourContainerId");

container.addEventListener
("mouseleave", () =>
    {
        cursor.classList.add("mouse-hidden");
    }
);

container.addEventListener
("mouseenter", () =>
    {
        cursor.classList.remove("mouse-hidden");
    }
);

body.addEventListener
("mousemove", (e) =>
    {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
    }
);

body.addEventListener
("mouseover", (e) =>
    {
        const target = e.target;
        if (target.tagName === "A")
        {
            cursor.classList.add("hover");
        }
    }
);

body.addEventListener
("mouseout", (e) =>
    {
        const target = e.target;
        if (target.tagName === "A")
        {
            cursor.classList.remove("hover");
        }
    }
);

const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener
("click", () =>
    {
    searchForm.classList.toggle("active");
    document.addEventListener
        ("click", (e) =>
            {
                if (!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm)) 
                {
                    searchForm.classList.remove("active");
                }
            }
        );
    }
);

cartBtn.addEventListener
("click", () =>
    {
        cartItem.classList.toggle("active");
        document.addEventListener
        ("click", (e) =>
            {
                if (!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItem))
                {
                    cartItem.classList.remove("active");
                }
            }
        );
    }
);

menuBtn.addEventListener
("click", () =>
    {
        navbar.classList.toggle("active");
        document.addEventListener
        ("click", (e) =>
            {
                if (!e.composedPath().includes(menuBtn) && !e.composedPath().includes(navbar))
                {
                    navbar.classList.remove("active");
                }
            }
        );
    }
);
