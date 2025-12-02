import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  IconButton,
} from "@radix-ui/themes";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const SIDEBAR_WIDTH = 240;

const Dashboard = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [open, setOpen] = useState(true);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const active = pathname.includes("/dashboard/links") ? "links" : "shorten";
  const user = localStorage.email;

  const headerLeft = isDesktop && open ? SIDEBAR_WIDTH : 0;
  const headerWidth = isDesktop && open ? `calc(100% - ${SIDEBAR_WIDTH}px)` : "100%";
  const mainMarginLeft = isDesktop && open ? SIDEBAR_WIDTH : 0;

  const menuItem = (label, route, key) => (
    <div
      onClick={() => {
        navigate(route);
        if (!isDesktop) setOpen(false);
      }}
      style={{
        padding: "12px 14px",
        borderRadius: 6,
        background: active === key ? "#e8edffff" : "transparent",
        color: active === key ? "#3f42fcff" : "#666",
        fontWeight: active === key ? 500 : 300,
        cursor: "pointer",
        transition: "0.25s ease",
      }}
    >
      {label}
    </div>
  );

  return (
    <Flex direction="column" style={{ minHeight: "100dvh" }}>
      <aside
        style={{
          width: SIDEBAR_WIDTH,
          padding: "120px 12px",
          background: "#fff",
          borderRight: "1px solid #f1f1f1",
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          zIndex: 40,
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.28s ease",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <Flex direction="column" gap="10">
          {menuItem("Generate Short URL", "/dashboard/shorten", "shorten")}
          {menuItem("My URL", "/dashboard/links", "links")}
        </Flex>
      </aside>

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          left: headerLeft,
          width: headerWidth,
          padding: "12px 16px",
          borderBottom: "1px solid #eee",
          background: "white",
          transition: "left 0.28s ease, width 0.28s ease",
        }}
      >
        <Flex align="center" justify="between">
          <Flex align="center" gap="3">
            {!isDesktop && (
              <IconButton variant="ghost" onClick={() => setOpen(!open)}>
                {open ? <Cross2Icon /> : <HamburgerMenuIcon />}
              </IconButton>
            )}
            <Heading size="5">URL Shortener App — Welcome {user}</Heading>
          </Flex>

          <Button
            variant="solid"
            onClick={() => {
              localStorage.removeItem("email");
              navigate("/login", { replace: true });
            }}
          >
            Logout
          </Button>
        </Flex>
      </header>

      {!isDesktop && open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.28)",
            zIndex: 30,
          }}
        />
      )}

      <main
        style={{
          marginLeft: mainMarginLeft,
          padding: 16,
          transition: "margin-left 0.28s ease",
          minHeight: "calc(100dvh - 64px)",
        }}
      >
        <Outlet />
      </main>
    </Flex>
  );
};

export default Dashboard;
